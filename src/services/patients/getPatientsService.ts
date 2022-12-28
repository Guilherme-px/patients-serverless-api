import AWS from 'aws-sdk';

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.PATIENTS_TABLE;

const execute = async () => {
    const params = {
        TableName: tableName!,
    };

    return await dynamoClient.scan(params).promise();
};

export { execute };
