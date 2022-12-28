import { Router } from 'express';
import { celebrate } from 'celebrate';

import { createPatientController } from '../../controllers/patients/createPatientController';
import { patientValidator } from '../../middlewares/validator';
import { getPatientsController } from '../../controllers/patients/getPatientsController';

const routes = Router();

routes.post('/', celebrate(patientValidator), createPatientController);
routes.get('/', getPatientsController);

export default routes;
