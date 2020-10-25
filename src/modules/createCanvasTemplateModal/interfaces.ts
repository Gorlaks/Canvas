import { ICreateCanvasTemplate } from "../canvas/interfaces";

export interface ICreateCanvasTemplateModalService {
  createCanvasTemplate(templateData: ICreateCanvasTemplate): Promise<any>;
}