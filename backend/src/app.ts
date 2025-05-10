import express from 'express';
import cors from 'cors';
import goszakupRouter from './routes/goszakup.route';
import mitworkRouter from './routes/mitwork.route';
import samrukRouter from './routes/samruk.route';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/goszakup', goszakupRouter);
app.use('/api/mitwork', mitworkRouter);
app.use('/api/samruk', samrukRouter);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

export default app;