import { Patient } from '../../types/interfaces/Patient';
import { dynamoClient, tableName } from '../../utils/databaseManager';

const updatePatientsService = async (patient: Patient, id: string) => {
    const params = {
        TableName: tableName!,
        Item: {
            id,
            ...patient,
        },
    };

    return await dynamoClient.put(params).promise();
};

export { updatePatientsService };
