import express from 'express'
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from "./middleware/error-habdler.js";
import dotenv from 'dotenv'
import connectDB from "./db/connect.js";
import 'express-async-errors'
import cors from 'cores'

dotenv.config()
const app = express()
process.setMaxListeners(0);

//Routes
import AuthRoutes from "./routes/AuthRoutes.js";
import JobRoutes from "./routes/JobRoutes.js";

// app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello');
})

app.use('/api/v1/auth', AuthRoutes)
app.use('/api/v1/jobs', JobRoutes)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        })
    } catch (e) {
        console.log("Error", e)
    }
}
start()