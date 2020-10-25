import UserService from "../../modules/user/userService";
import { IUserService } from "../../modules/user/interfaces";

import userRepository from "../repositories/userRepository";

const userService: IUserService = new UserService(userRepository);

export default userService