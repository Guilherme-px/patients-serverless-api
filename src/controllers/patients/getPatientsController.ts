import { Request, Response } from 'express';
import { execute } from '../../services/patients/getPatientsService';

const getPatientsController = async (req: Request, res: Response) => {
    const { Items: patients } = await execute();

    return res.status(200).json(patients);
};

export { getPatientsController };
