import AuthRepository from "../../modules/auth/authRepository";
import { IAuthRepository } from "../../modules/auth/interfaces";

import apiClient from "../api/apiClient";

const authRepository: IAuthRepository = new AuthRepository(apiClient);

export default authRepository;