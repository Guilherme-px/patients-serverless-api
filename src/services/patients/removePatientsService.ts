import { dynamoClient, tableName } from '../../utils/databaseManager';

const removePatientsSerive = async (id: string) => {
    const params = {
        TableName: tableName!,
        Key: {
            id,
        },
    };

    return await dynamoClient.delete(params).promise();
};

export { removePatientsSerive };
