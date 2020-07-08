const HomeModel = require('../model/HomeModel');

exports.paginaInicial = (req, res) => {
    console.log(req.flash('error'),req.flash('success'),req.flash('info'));

    res.render('index');
};

exports.trataPost = (req, res) => {
    res.send(req.body);
};