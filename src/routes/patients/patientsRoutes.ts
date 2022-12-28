import { Router } from 'express';
import { celebrate } from 'celebrate';

import { createPatientController } from '../../controllers/patients/createPatientController';
import { patientValidator } from '../../middlewares/validator';
import { getPatientsController } from '../../controllers/patients/getPatientsController';
import { getPatientsByIdController } from '../../controllers/patients/getPatientsByIdController';
import { updatePatientsController } from '../../controllers/patients/updatePatientsController';
import { removePatientsController } from '../../controllers/patients/removePatientsController';

const routes = Router();

routes.post('/', celebrate(patientValidator), createPatientController);
routes.get('/', getPatientsController);
routes.get('/:id', getPatientsByIdController);
routes.put('/:id', celebrate(patientValidator), updatePatientsController);
routes.delete('/:id', removePatientsController);

export default routes;
