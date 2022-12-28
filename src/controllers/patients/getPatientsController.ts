import { Request, Response } from 'express';
import { getPatientsService } from '../../services/patients/getPatientsService';

const getPatientsController = async (req: Request, res: Response) => {
    const { Items: patients } = await getPatientsService();

    return res.status(200).json(patients);
};

export { getPatientsController };
