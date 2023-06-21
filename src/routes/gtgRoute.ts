import express, { Request, Response } from 'express';
import environment from '../environment';

const router = express.Router();

router.get('/', (re: Request, resp: Response) => {
    const jsonResponse = {
        version: '1.0.0',
        status: 'up',
        environment: environment.APP_ENVIRONMENT,
    };
    resp.status(200).json(jsonResponse);
});

export default router;
