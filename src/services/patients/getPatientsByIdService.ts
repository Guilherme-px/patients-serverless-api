import { dynamoClient, tableName } from '../../utils/databaseManager';

const getPatientsByIdSerive = async (id: string) => {
    const params = {
        TableName: tableName!,
        Key: {
            id,
        },
    };

    return await dynamoClient.get(params).promise();
};

export { getPatientsByIdSerive };
