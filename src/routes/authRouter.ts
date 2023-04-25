import express from 'express';
const authRouter = express.Router();

import { AuthController } from '../controllers/authController';

authRouter.get('/', (req: any, res) => {
    console.log(req.user);
    res.send("balvlalva")

    // res.send(req.user)
})
authRouter.post('/register', (req, res, next) => {
    AuthController.registerNewUser(req, res)
});
authRouter.post('/login', (req, res, next) => {
    AuthController.login(req, res)
});

export default authRouter;