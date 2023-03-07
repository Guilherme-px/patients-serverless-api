import { dynamoClient, patientTableName } from '../../utils/databaseManager';

const removePatientsSerive = async (id: string) => {
    const params = {
        TableName: patientTableName!,
        Key: {
            id,
        },
    };

    return await dynamoClient.delete(params).promise();
};

export { removePatientsSerive };
