import AWS from 'aws-sdk';
import { Patient } from '../../types/interfaces/Patient';
import { v4 } from 'uuid';

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.PATIENTS_TABLE;

const execute = async (patient: Patient) => {
    const newPatient = {
        id: v4(),
        ...patient,
    };

    const params = {
        TableName: tableName!,
        Item: newPatient,
    };

    return await dynamoClient.put(params).promise();
};

export { execute };
