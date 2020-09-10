import {Request, Response} from 'express'

export const get_users = async (req: Request, res: Response) => {
	res.json('Hello World');	
}