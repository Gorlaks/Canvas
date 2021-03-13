export interface IUserRepository {
	getCanvasList(access_token: string): Promise<ICanvasList>;
}

export interface IUserService {
	setCanvasList(access_token: string): Promise<any>;
}

export interface ICanvasList {
	_id: string;
	ownerId: string;
	title: string;
	date: string;
	type: string;
}