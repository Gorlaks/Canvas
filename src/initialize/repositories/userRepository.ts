import UserRepository from "../../modules/user/userRepository";
import { IUserRepository } from "../../modules/user/interfaces";

import apiClient from "../api/apiClient";

const userRepository: IUserRepository = new UserRepository(apiClient);

export default userRepository;