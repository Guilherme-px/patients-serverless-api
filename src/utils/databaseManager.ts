import AWS from 'aws-sdk';

let options = {};
if (process.env.IS_OFFLINE) {
    options = {
        region: 'localhost',
        endpoint: 'http://localhost:8000',
        accessKeyId: 'DEFAULT_ACCESS_KEY',
        secretAccessKey: 'DEFAULT_SECRET',
    };
}
const dynamoClient = new AWS.DynamoDB.DocumentClient(options);
const patientTableName = process.env.PATIENTS_TABLE;
const userTableName = process.env.USERS_TABLE;

export { dynamoClient, patientTableName, userTableName };
