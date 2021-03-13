import { IServerResponse } from "../common/interfaces/interfaces";

export interface IUserRepository {
	getCanvasList(access_token: string): Promise<IServerResponse>;
}

export interface IUserService {
	setCanvasList(access_token: string): Promise<IServerResponse>;
}

export interface ICanvasList {
	_id: string;
	ownerId: string;
	title: string;
	date: string;
	type: string;
}