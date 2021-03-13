import { IAdminService, IDeleteCanvasTemplate } from "./interfaces";
import { IApiClient } from "../common/apiClient/interfaces";

class AdminService implements IAdminService {
  private apiClient: IApiClient;

  constructor(apiClient: IApiClient) {
    this.apiClient = apiClient;
  }

  async deleteCanvasTemplate(access_token: string, type: string) {
    return await this.apiClient.sendDeleteRequest(`/delete_canvas_template?access_token=${access_token}&canvas_type=${type}`);
  }
}

export default AdminService;