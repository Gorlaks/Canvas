import AdminService from "../../modules/admin/adminService";
import { IAdminService } from "../../modules/admin/interfaces";

import apiClient from "../api/apiClient";

const adminService: IAdminService = new AdminService(apiClient);

export default adminService;