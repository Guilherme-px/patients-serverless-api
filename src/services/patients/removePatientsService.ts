import AWS from 'aws-sdk';

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.PATIENTS_TABLE;

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
