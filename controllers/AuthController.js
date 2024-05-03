import User from "../models/User.js";
import {StatusCodes} from "http-status-codes/build/cjs/status-codes.js";

const register = async (req, res, next) => {
    const {name, email, password} = req.body;
    if (!name || !email || !password){
        throw new Error("Please provide all fields!")
    }
    const userExist = await User.findOne({email})
    if (userExist){
        throw new Error('User Already Exists!')
    }
    let user = await User.create({name, email, password})
    const token = user.createJWT()
    await res.status(StatusCodes.CREATED).json({user, token});
}
const login = async (req, res) => {
    res.send('login')
}
const updateUser = async (req, res) => {
    res.send('updateUser')
}

export {register, login, updateUser}