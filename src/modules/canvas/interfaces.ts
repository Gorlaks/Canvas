import { ICanvasTemplate } from "../admin/interfaces";

export interface ICanvasRepository {
	getCanvasById(ownerId: string, id: string): Promise<ICanvasData>;
	getCanvasTypes(access_token: string): Promise<Array<ICanvasTemplate> | Record<string, string>>;
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
	ownerId: string | null;
	title: string | null;
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