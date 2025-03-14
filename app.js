import express from "express";
import { PORT } from "./config/env.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";

const app = express();

app.use('/api/v1/users', userRouter);
app.use('/api/v1/authRouter', authRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);


app.get('/', (req, res) => {
   res.send('Welcome To The Subscription Tracker API!')
})

app.listen(PORT, () => {
   console.log(`App is listenning on port ${PORT}`)
})