import express from 'express';
import serverless from 'serverless-http';
import patientRoutes from './src/routes/patients/patientsRoutes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/patients', patientRoutes);

export const handler = serverless(app);
