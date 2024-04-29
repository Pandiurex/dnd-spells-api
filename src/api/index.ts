import express from 'express';
import spellsRouter from './routes/spells/spells.route';

const app = express();

app.use(express.json());
app.use('/api/v1', spellsRouter);

app.use('/', (_req, res, _next) => {
	res.statusMessage = "Route doesn't exists";
	res.status(404).end();
});

export default app;
