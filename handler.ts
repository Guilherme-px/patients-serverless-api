import express from 'express';
import cors from 'cors';
import { Response, Request, NextFunction } from 'express';
import { CelebrateError } from 'celebrate';
import serverless from 'serverless-http';
import patientRoutes from './src/routes/patients/patientsRoutes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/patients', patientRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof CelebrateError) {
        const errorBody = err.details.get('body');
        return res.status(400).json({
            message: errorBody?.message,
        });
    }

    return res.status(500).json({
        status: 'Error',
        message: `Internal server error: ${err.message}`,
    });
});

export const handler = serverless(app);
