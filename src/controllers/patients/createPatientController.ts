import { Request, Response } from 'express';
import { execute } from '../../services/patients/createPatientsService';

const createPatientController = async (req: Request, res: Response) => {
    const patient = await execute(req.body);

    return res.json(patient);
};

export { createPatientController };
