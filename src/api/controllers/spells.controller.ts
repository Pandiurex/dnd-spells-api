import { NextFunction, Request, Response } from 'express';
import { ISpellResponse } from '../interfaces/spell.response.i';
import SpellModel from '../models/user.model';

export function getAllSpells(_req: Request, res: Response, next: NextFunction) {
	const myHeaders = new Headers();
	myHeaders.append('Accept', 'application/json');

	fetch(`${process.env.DND_API}`)
		.then((response) => {
			if (!response.ok) {
				throw new Error('Error getting data');
			}
			return response.json(); // Parsear la respuesta JSON
		})
		.then((data: ISpellResponse) => {
			res.send(data);
			next();
		})
		.catch((error) => console.error(error));
}

export function getSpellByName(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const myHeaders = new Headers();
	myHeaders.append('Accept', 'application/json');

	fetch(`${process.env.DND_API}${req.params.name}`)
		.then((response) => {
			if (!response.ok) {
				throw new Error('Error getting data');
			}
			return response.json();
		})
		.then((data: ISpellResponse) => {
			res.send(data);
			next();
		})
		.catch((error) => console.error(error));
}

export function createNewSpell(_req: Request, res: Response) {
	res.send('printing');
	console.log('printing');
}
export async function getSpellFromDB(_req: Request, res: Response) {
	const spell = await SpellModel.find({
		index: 'acid-arrow',
	});
	res.send(spell);
	console.log(spell);
}
