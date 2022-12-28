import { Request, Response } from 'express';
import { createPatientsSerive } from '../../services/patients/createPatientsService';

const createPatientController = async (req: Request, res: Response) => {
    const patient = await createPatientsSerive(req.body);

    return res.json(patient);
};

export { createPatientController };
