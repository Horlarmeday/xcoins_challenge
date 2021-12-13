import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import { CORS_ORIGINS } from '../../config';

export default (server: express.Application) => {
  server.use(cors({ origin: CORS_ORIGINS }));
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());
};
