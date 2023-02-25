import { Patient } from '../../types/interfaces/Patient';
import { v4 } from 'uuid';
import { dynamoClient, tableName } from '../../utils/databaseManager';

const createPatientsSerive = async (patient: Patient) => {
    const newPatient = {
        id: v4(),
        ...patient,
    };

    const params = {
        TableName: tableName!,
        Item: newPatient,
    };

    return await dynamoClient.put(params).promise();
};

export { createPatientsSerive };
