import { Router } from 'express';
import { createPatientController } from '../../controllers/patients/createPatientController';

const routes = Router();

routes.post('/', createPatientController);

export default routes;
