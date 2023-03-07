import { dynamoClient, userTableName } from '../../utils/databaseManager';

const getUsersService = async () => {
    const params = {
        TableName: userTableName!,
    };

    return await dynamoClient.scan(params).promise();
};

export { getUsersService };
