import userStatesStorage from "../../initialize/statesStorages/userStatesStorage";
import { IServerResponse } from "../common/interfaces/interfaces";
import { IUserService, IUserRepository, ICanvasList } from "./interfaces";

class UserService implements IUserService {
	private userRepository: IUserRepository;

	constructor(userRepository: IUserRepository) {
		this.userRepository = userRepository;
	}

	/** @description Write received canvas list to redux store. */
	async setCanvasList(access_token: string) {
		const answer: IServerResponse = await this.userRepository.getCanvasList(access_token);
        if (answer?.code === 1) throw answer.message;
        const { canvases } = answer.message;

        if (!canvases.length) return;

		const filteredCanvasList = await canvases.map((item: ICanvasList, index: number) => {
			return {
				key: index++,
				id: item["_id"],
				title: item.title,
				lastUpdate: item.date,
				templateType: item.type,
			};
		})
		userStatesStorage.setState("canvasList", filteredCanvasList);

		return filteredCanvasList;
	}
}

export default UserService;