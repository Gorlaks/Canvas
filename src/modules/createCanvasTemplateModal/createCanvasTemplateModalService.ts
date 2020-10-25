import { ICreateCanvasTemplateModalService } from "./interfaces";
import { IApiClient } from "../common/apiClient/interfaces";
import { ICreateCanvasTemplate } from "../canvas/interfaces";

class CreateCanvasTemplateModalService implements ICreateCanvasTemplateModalService {
  private apiClient: IApiClient;

  constructor(apiClient: IApiClient) {
    this.apiClient = apiClient;
  }

  /** @description Send post request for creating canvas template. */
  async createCanvasTemplate(templateData: ICreateCanvasTemplate) {
    await this.apiClient.sendRequest(templateData, "/admin/createCanvasTemplate")
  }
}

export default CreateCanvasTemplateModalService;