import { Patient } from '../../types/interfaces/Patient';
import { dynamoClient, patientTableName } from '../../utils/databaseManager';

const updatePatientsService = async (patient: Patient, id: string) => {
    const params = {
        TableName: patientTableName!,
        Item: {
            id,
            ...patient,
        },
    };

    return await dynamoClient.put(params).promise();
};

export { updatePatientsService };
