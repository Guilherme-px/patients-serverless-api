import AWS from 'aws-sdk';

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.PATIENTS_TABLE;

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
