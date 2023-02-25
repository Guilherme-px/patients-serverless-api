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
const tableName = process.env.PATIENTS_TABLE;

export { dynamoClient, tableName };
