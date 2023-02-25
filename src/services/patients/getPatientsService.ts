import { dynamoClient, tableName } from '../../utils/databaseManager';

const getPatientsService = async () => {
    const params = {
        TableName: tableName!,
    };

    return await dynamoClient.scan(params).promise();
};

export { getPatientsService };
