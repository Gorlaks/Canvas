import AuthService from "../../modules/auth/authService";
import { IAuthService } from "../../modules/auth/interfaces";

import authRepository from "../repositories/authRepository";
import localStorageApi from "../api/localStorageApi";
import apiClient from "../api/apiClient";

const authService: IAuthService = new AuthService(authRepository, localStorageApi, apiClient);

export default authService;