import express from 'express'

const router = express.Router()

import {register, login, updateUser} from "../controllers/AuthController.js";

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/updateUser').put(updateUser);

export default router
