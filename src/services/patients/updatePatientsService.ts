import AWS from 'aws-sdk';

import { Patient } from '../../types/interfaces/Patient';

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.PATIENTS_TABLE;

const updatePatientsService = async (patient: Patient, id: string) => {
    const params = {
        TableName: tableName!,
        Item: {
            id,
            ...patient,
        },
    };

    return await dynamoClient.put(params).promise();
};

export { updatePatientsService };
