import { NextFunction, Request, Response } from 'express';
import { ISpellResponse } from '../interfaces/spell.response.i';
import SpellModel from '../models/spell.model';
import { AppError } from '../../utils/error.handler';

export async function getAllSpells(
	_req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const spellsResponse = await fetch(`${process.env.DND_API}`);
		const spellsData = await spellsResponse.json();
		res.send(spellsData);
		next();
	} catch (error) {
		if (error instanceof AppError) {
			console.error(`Database error (${error.statusCode}): ${error.message}`);
		} else if (error instanceof Error) {
			console.error(error.message);
		}
	}
}

export async function factorySpells(_req: Request, _res: Response) {
	try {
		const response = await fetch(`${process.env.DND_API}`);
		const spells = await response.json();
		spells.results.forEach(async (spell: any) => {
			const spellResponse = await fetch(`${process.env.DND_API}${spell.index}`);
			const spellData: ISpellResponse = await spellResponse.json();
			const spellDataDb = new SpellModel(spellData);
			try {
				const spells = await SpellModel.findOne({ index: spellDataDb.index });
				if (!spells) {
					console.log(spellData.index);
					await spellDataDb.save();
				}
			} catch (error) {
				if (error instanceof AppError) {
					console.error(
						`Database error (${error.statusCode}): ${error.message}`
					);
				} else if (error instanceof Error) {
					console.error(error.message);
				}
			}
		});
	} catch (error) {
		if (error instanceof AppError) {
			console.error(`Database error (${error.statusCode}): ${error.message}`);
		} else if (error instanceof Error) {
			console.error(error.message);
		}
	}
}
export async function getSpellByName(req: Request, res: Response) {
	try {
		const spellId = req.params.id;
		const spell = await SpellModel.find({
			index: spellId,
		});
		console.log(spell);

		res.send(spell);
	} catch (error) {
		if (error instanceof AppError) {
			console.error(`Database error (${error.statusCode}): ${error.message}`);
		} else if (error instanceof Error) {
			console.error(error.message);
		}
	}
}
