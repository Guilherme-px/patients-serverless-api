import { Response, Request } from 'express';
import { updatePatientsService } from '../../services/patients/updatePatientsService';
import { getPatientsByIdSerive } from '../../services/patients/getPatientsByIdService';

const updatePatientsController = async (req: Request, res: Response) => {
    const { id } = req.params;

    const { Item: patient } = await getPatientsByIdSerive(id);

    if (!patient) return res.status(404).send('Paciente não encontrado');

    const newPatientUpdate = await updatePatientsService(req.body, id);

    return res.status(200).json(newPatientUpdate);
};

export { updatePatientsController };
