import express from 'express';
import {
	factorySpells,
	getAllSpells,
	getSpellByName,
} from '../../controllers/spells.controller';
const spellsRouter = express.Router();

spellsRouter.get('/spells', getAllSpells);
spellsRouter.get('/factory', factorySpells);
spellsRouter.get('/spell/:id', getSpellByName);

export default spellsRouter;
