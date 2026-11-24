import express from 'express';
import cors from 'cors';
import MateriasRoutes from './routes/materias.routes';
import AuthRoutes from './routes/auth.routes';


const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/v1/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.use('/api/v1/materias', MateriasRoutes);
app.use('/api/v1/auth', AuthRoutes);


export default app;