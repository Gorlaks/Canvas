export interface IUserRepository {
	getCanvasList(ownerId: string): Promise<ICanvasList>;
}

export interface IUserService {
	setCanvasList(ownerId: string): Promise<any>;
}

export interface ICanvasList {
	id: string;
	ownerId: string;
	title: string;
	date: string;
	type: string;
}