export interface IBody {
	access_token?: string;
	id?: string | null;
	ownerId?: string | null,
	login?: string | null;
	password?: string | null;
	canvasId?: string | null;
	type?: string | null;
	title?: string | null;
	data?: Array<Record<string, any>> | null;
}

export interface IApiClient {
	sendRequest(params: IBody, path: string): Promise<any>;
	sendGetRequest(path: string): Promise<any>;
	sendDeleteRequest(path: string): Promise<any>;
}