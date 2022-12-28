import { Router } from 'express';
import { celebrate } from 'celebrate';

import { createPatientController } from '../../controllers/patients/createPatientController';
import { patientValidator } from '../../middlewares/validator';

const routes = Router();

routes.post('/', celebrate(patientValidator), createPatientController);

export default routes;
