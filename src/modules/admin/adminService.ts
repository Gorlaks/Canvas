import { IAdminService, IDeleteCanvasTemplate } from "./interfaces";
import { IApiClient } from "../common/apiClient/interfaces";

class AdminService implements IAdminService {
  private apiClient: IApiClient;

  constructor(apiClient: IApiClient) {
    this.apiClient = apiClient;
  }

  async deleteCanvasTemplate(templateData: IDeleteCanvasTemplate) {
    return await this.apiClient.sendRequest(templateData, "/admin/deleteCanvasTemplate");
  }
}

export default AdminService;