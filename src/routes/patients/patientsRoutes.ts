import { Router } from 'express';
import { celebrate } from 'celebrate';

import { createPatientController } from '../../controllers/patients/createPatientController';
import { patientValidator } from '../../middlewares/validator';
import { getPatientsController } from '../../controllers/patients/getPatientsController';
import { getPatientsByIdController } from '../../controllers/patients/getPatientsByIdController';

const routes = Router();

routes.post('/', celebrate(patientValidator), createPatientController);
routes.get('/', getPatientsController);
routes.get('/:id', getPatientsByIdController);

export default routes;
