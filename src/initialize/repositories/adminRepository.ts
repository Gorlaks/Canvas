import AdminRepository from "../../modules/admin/adminRepository";
import { IAdminRepository } from "../../modules/admin/interfaces";

import apiClient from "../api/apiClient";

const adminRepository: IAdminRepository = new AdminRepository(apiClient);

export default adminRepository;