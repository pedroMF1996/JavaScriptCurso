import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import { resolve } from 'path';

dotenv.config();

import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import alunoRoutes from './src/routes/alunoRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import fotoRoutes from './src/routes/fotosRoutes';

import './src/database';

const whiteList = [
  'https://react1.otaviomiranda.com.br',
  'http://localhost:3000',
];

const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

export default new App().app;
