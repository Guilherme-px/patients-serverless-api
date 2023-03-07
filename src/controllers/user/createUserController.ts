import { AppError } from './../../errors/AppError';
import { Response, Request, NextFunction } from 'express';
import { createUserService } from '../../services/user/createUserService';

const createUserController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const user = { ...req.body };

    try {
        const createdUser = await createUserService(user);

        return res.status(201).json(createdUser);
    } catch (error) {
        if (error instanceof AppError) {
            res.status(error.statusCode).json({ message: error.message });
        } else {
            next(error);
        }
    }
};

export { createUserController };
