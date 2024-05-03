import mongoose from 'mongoose'
import isEmail from 'validator/lib/isEmail.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const UserSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, 'Please provide Name'],
            minLength: 3,
            maxLength: 20,
            trim: true
        },
        last_name: {
            type: String,
            maxLength: 20,
            trim: true,
            default: 'lastName'
        },
        email: {
            type: String,
            required: [true, 'Please provide Email'],
            unique: true,
            trim: true,
            validate: {
                validator: (v) => {
                    return isEmail(v);
                },
                message: props => `${props.value} is not a valid Email!`
            },
        },
        password: {
            type: String,
            required: [true, 'Please provide Password'],
            minLength: 6,
            trim: true,
            select: false
        },
        location: {
            type: String,
            maxLength: 20,
            trim: true,
            default: 'Lahore'
        }
    },
    {
        toJSON: {
            transform(doc, ret) {
                delete ret.password;
            },
        }
    })

UserSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})
UserSchema.methods.createJWT = function () {
    return jwt.sign({userId: this._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRY})
}
export default mongoose.model('User', UserSchema)