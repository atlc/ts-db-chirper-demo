import * as express from 'express';
import chirpsRouter from './chirps';

const router = express.Router();

router.use('/api/chirps', chirpsRouter);

export default router;