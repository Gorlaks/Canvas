import { ICanvasBlocksData } from "../canvas/interfaces";
import { IServerResponse } from "../common/interfaces/interfaces";

export interface IAdminService {
  deleteCanvasTemplate(templateData: IDeleteCanvasTemplate): Promise<IServerResponse>;
}

export interface IAdminRepository {
  getUsersList(access_token: string): Promise<IServerResponse>;
  getCanvasTemplateList(access_token: string): Promise<IServerResponse>;
}

export interface IUsers {
  id: string;
  login: string;
  email: string;
}

export interface ICanvasTemplate {
  _id: string;
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