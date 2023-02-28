import { Request, Response } from 'express';
import { getPatientsByIdSerive } from '../../services/patients/getPatientsByIdService';
import { removePatientsSerive } from '../../services/patients/removePatientsService';

const removePatientsController = async (req: Request, res: Response) => {
    const { id } = req.params;

    const { Item: patient } = await getPatientsByIdSerive(id);

    if (!patient) return res.status(404).send('Paciente não encontrado');

    await removePatientsSerive(id);

    return res.status(200).end();
};

export { removePatientsController };
