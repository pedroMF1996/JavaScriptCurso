import jwt from 'jsonwebtoken';
import User from '../model/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ errors: ['Login required'] });
  }

  const [, token] = authorization.split(' ');
  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);

    const { id, email } = dados;

    // console.log(id, email);
    const user = await User.findOne({ where: { id, email } });
    console.log(user);
    if (!user) {
      return res.status(401).json({
        error: ['Usuário inválido'],
      });
    }

    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (error) {
    return res.status(401).json({ errors: ['Token expirado ou inválido'] });
  }
};
