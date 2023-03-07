import { Request, Response } from 'express';
import { getUsersService } from '../../services/user/getUsersService';

const getUsersController = async (req: Request, res: Response) => {
    const { Items: users } = await getUsersService();

    return res.status(200).json(users);
};

export { getUsersController };
