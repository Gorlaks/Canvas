import { IAdminRepository } from "./interfaces";
import { IApiClient } from "../common/apiClient/interfaces";

class AdminRepository implements IAdminRepository{
  private apiClient: IApiClient;

  constructor(apiClient: IApiClient) {
    this.apiClient = apiClient;
  }

  async getUsersList(id: string) {
    return await this.apiClient.sendRequest({ id }, "/admin/getUsers")
  }

  async getCanvasTemplateList(id: string) {
    return await this.apiClient.sendRequest({ id }, "/admin/getCanvasTemplates");
  }
}

export default AdminRepository;