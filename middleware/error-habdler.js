import {StatusCodes} from "http-status-codes/build/cjs/status-codes.js";

const errorHandlerMiddleware = (err, req, res, next) => {
    const defaultError = {
        code: err.message ? StatusCodes.BAD_REQUEST : StatusCodes.INTERNAL_SERVER_ERROR,
        error: err.message || "Something went wrong!"
    }
    console.log(err.message)
    if (err.name === 'ValidationError'){
        defaultError.code = StatusCodes.BAD_REQUEST
        defaultError.error = Object.values(err.errors).map((v) => v.message)
    }

    if (err.code === 11000){
        defaultError.code = StatusCodes.BAD_REQUEST
        defaultError.error = `${Object.keys(err.keyValue)} field should be unique`
    }

    res.status(defaultError.code).json({
        error: defaultError.error
    });
}

export default errorHandlerMiddleware;