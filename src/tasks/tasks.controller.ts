import { Request, Response } from 'express';

export function get(_: Request, res: Response): void {
  res.send('<h1>Hello World!<h1>');
}

export function post(_, res): void {
  res.send('posted');
}
