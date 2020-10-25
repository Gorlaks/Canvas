export interface IAuthRepository {
	authentication(login: string, password: string): Promise<any>;
}

export interface IAuthService {
	login(login: string, password: string): Promise<any>;
	registration(data: IRegistrationData): Promise<any>;
}

export interface IRegistrationData {
	email: string;
	login: string;
	password: string;
}

export interface IUserAuthData {
	id: string;
	login: string;
	email: string;
}