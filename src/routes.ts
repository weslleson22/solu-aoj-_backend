import express, { response } from 'express';
import knex from './database/connection';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';
const routes = express.Router();

//criando uma instancia da class PointsController
const pointsController = new PointsController();
const itemsController = new ItemsController();


routes.get('/items', itemsController.index);


routes.post('/points',pointsController.create);


routes.get('/points',pointsController.index);


routes.get('/points/:id',pointsController.show);
export default routes;