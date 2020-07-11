import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import AppError from './errors/AppError';
import Routes from './routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(Routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.log(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

const port = 3333;
app.listen(port, () => {
  console.log(`🚀 Server start on port ${port}`);
});
