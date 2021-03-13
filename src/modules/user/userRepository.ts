import { IUserRepository } from "./interfaces";
import { IApiClient } from "../common/apiClient/interfaces";


class UserRepositroy implements IUserRepository {
	private apiClient: IApiClient;

	constructor(apiClient: IApiClient) {
		this.apiClient = apiClient;
	}
 	/** @description Send post request for getting canvas list of current user. */
	async getCanvasList(access_token: string) {
		const answer = await this.apiClient.sendRequest({
			access_token
		}, "/get_user_canvases");
		
		return answer;
	}

}

export default UserRepositroy;