import { Request, Response } from 'express';
import { execute } from '../../services/patients/getPatientsByIdService';

const getPatientsByIdController = async (req: Request, res: Response) => {
    const { id } = req.params;

    const { Item: patient } = await execute(id);

    if (!patient) return res.status(404).send('Id não encontrado');

    return res.status(200).json(patient);
};

export { getPatientsByIdController };
