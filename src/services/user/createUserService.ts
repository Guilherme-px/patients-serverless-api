import { AppError } from './../../errors/AppError';
import { IUser } from './../../types/interfaces/IUser';
import { v4 } from 'uuid';
import { dynamoClient, userTableName } from '../../utils/databaseManager';

const createUserService = async (user: IUser) => {
    const params = {
        TableName: userTableName!,
        IndexName: 'email-index',
        KeyConditionExpression: 'email = :email',
        ExpressionAttributeValues: {
            ':email': user.email,
        },
    };

    const result = await dynamoClient.query(params).promise();

    if (result.Items!.length > 0) {
        throw new AppError('E-mail já cadastrado', 409);
    }

    const newUser = {
        id: v4(),
        ...user,
    };

    const putParams = {
        TableName: userTableName!,
        Item: newUser,
    };

    return await dynamoClient.put(putParams).promise();
};

export { createUserService };
