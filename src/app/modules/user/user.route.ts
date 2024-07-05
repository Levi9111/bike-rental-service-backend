import { Router } from 'express';
import { UserValidation } from './user.validation';
import { UserControllers } from './user.controller';

const router = Router();

router.post('/signup', UserControllers.createUser);

export const UserRouter = router;
