import { Patient } from '../../types/interfaces/Patient';
import { v4 } from 'uuid';
import { dynamoClient, patientTableName } from '../../utils/databaseManager';

const createPatientsSerive = async (patient: Patient) => {
    const newPatient = {
        id: v4(),
        ...patient,
    };

    const params = {
        TableName: patientTableName!,
        Item: newPatient,
    };

    return await dynamoClient.put(params).promise();
};

export { createPatientsSerive };
