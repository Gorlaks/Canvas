import { IServerResponse } from "../interfaces/interfaces";

export interface IBody {
	access_token?: string;
	id?: string | null;
	ownerId?: string | null,
	login?: string | null;
	password?: string | null;
	canvas_id?: string | null;
	type?: string | null;
	title?: string | null;
	data?: Array<Record<string, any>> | null;
}

export interface IApiClient {
	sendRequest(params: IBody, path: string): Promise<IServerResponse>;
	sendGetRequest(path: string): Promise<IServerResponse>;
	sendDeleteRequest(path: string): Promise<IServerResponse>;
}