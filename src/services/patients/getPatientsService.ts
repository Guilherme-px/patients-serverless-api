import AWS from 'aws-sdk';

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.PATIENTS_TABLE;

const getPatientsService = async () => {
    const params = {
        TableName: tableName!,
    };

    return await dynamoClient.scan(params).promise();
};

export { getPatientsService };
