import { ICanvasTemplate } from "../admin/interfaces";
import { IServerResponse } from "../common/interfaces/interfaces";

export interface ICanvasRepository {
	getCanvasById(access_token: string, id: string): Promise<IServerResponse>;
	getCanvasTypes(access_token: string): Promise<IServerResponse>;
}

export interface ICanvasService {
		deleteCanvas(access_token: string, canvasId: string): Promise<any>;
		createCanvas(access_token: string, title: string, type: string): Promise<any>;
		setCanvasListAfterRemoving(canvasId: string): void;
		updateCanvas(canvasData: Record<string, any>): Promise<any>;
		downloadPdf(canvasData: Record<string, any>): Promise<any>;
}

export interface ICanvasData {
	id: string
	title: string;
	type: string;
	columns: number;
	rows: number;
	data: ICanvasBlocksData[];
}

export interface ICreateCanvasTemplate {
	access_token: string;
	type: string | null;
	date: string | null;
	rows: number | null;
	columns: number | null;
	data: ICanvasBlocksData[];
}

export interface ICanvasBlocksData {
	position: number[];
	title: string;
	content: string;
	description: string;
}