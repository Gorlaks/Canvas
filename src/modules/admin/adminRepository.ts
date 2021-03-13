import { IAdminRepository } from "./interfaces";
import { IApiClient } from "../common/apiClient/interfaces";

class AdminRepository implements IAdminRepository{
  private apiClient: IApiClient;

  constructor(apiClient: IApiClient) {
    this.apiClient = apiClient;
  }

  async getUsersList(access_token: string) {
    return await this.apiClient.sendGetRequest(`/admin/get_users?access_token=${access_token}`);
  }

  async getCanvasTemplateList(access_token: string) {
    return await this.apiClient.sendRequest({ access_token }, "/canvas_templates");
  }
}

export default AdminRepository;