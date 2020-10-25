import { ICanvasBlocksData } from "../canvas/interfaces";

export interface IAdminService {
  deleteCanvasTemplate(templateData: IDeleteCanvasTemplate): Promise<Record<string, string>>;
}

export interface IAdminRepository {
  getUsersList(id: string): Promise<Array<IUsers>>;
  getCanvasTemplateList(id: string): Promise<any>;
}

export interface IUsers {
  id: string;
  login: string;
  email: string;
}

export interface ICanvasTemplate {
  id: string;
  type: string;
  rows: number;
  columns: number;
  data: Array<ICanvasBlocksData>;
  error?: string;
}

export interface IDeleteCanvasTemplate {
  ownerId: string;
  canvasId: string;
}