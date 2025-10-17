import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import cors from 'cors';
import logger from 'morgan';
import rateLimit from 'express-rate-limit'
import { profileController } from './controllers/profile.controller';
import { PORT } from './constants/env';


const app = express();
const requestLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});


// global middlewares
app.use(logger("combined"));
app.use(cors());
app.use(requestLimit)
app.use(express.json());

// routes
app.use('/me', profileController);

// start server
app.listen(PORT, () => {
    console.log(`Connection healthy! Server running on port ${PORT}`);
})