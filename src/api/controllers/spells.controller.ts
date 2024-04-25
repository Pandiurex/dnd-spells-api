import { Request, Response } from 'express';


export const getUsers = (_req: Request, res: Response) => {
    res.send('all good');
console.log('all good');
  };

  export const printUser = (_req: Request, res: Response) => {
    res.send('printing');
console.log('printing');
console.log('printing');

  };