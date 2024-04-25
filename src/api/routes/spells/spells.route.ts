import express from 'express';
import {getUsers, printUser} from '../../controllers/spells.controller'; 

const spellsRouter = express.Router();

spellsRouter.get('/', getUsers);
spellsRouter.get('/users', printUser); 


export default spellsRouter;
