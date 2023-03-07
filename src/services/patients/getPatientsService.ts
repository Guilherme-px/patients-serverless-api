import { dynamoClient, patientTableName } from '../../utils/databaseManager';

const getPatientsService = async () => {
    const params = {
        TableName: patientTableName!,
    };

    return await dynamoClient.scan(params).promise();
};

export { getPatientsService };
