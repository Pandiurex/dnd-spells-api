import express from 'express';
import {
	getSpellByName,
	createNewSpell,
	getAllSpells,
	getSpellFromDB,
} from '../../controllers/spells.controller';
const spellsRouter = express.Router();

spellsRouter.get('/spells', getAllSpells);
spellsRouter.get('/spells/:name', getSpellByName);
spellsRouter.get('/new-spell', createNewSpell);
spellsRouter.get('/spell', getSpellFromDB);

export default spellsRouter;
