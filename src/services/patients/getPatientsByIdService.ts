import { dynamoClient, patientTableName } from '../../utils/databaseManager';

const getPatientsByIdSerive = async (id: string) => {
    const params = {
        TableName: patientTableName!,
        Key: {
            id,
        },
    };

    return await dynamoClient.get(params).promise();
};

export { getPatientsByIdSerive };
