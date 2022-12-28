import AWS from 'aws-sdk';

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.PATIENTS_TABLE;

const execute = async (id: string) => {
    const params = {
        TableName: tableName!,
        Key: {
            id,
        },
    };

    return await dynamoClient.get(params).promise();
};

export { execute };
