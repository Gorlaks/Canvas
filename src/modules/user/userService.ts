import userStatesStorage from "../../initialize/statesStorages/userStatesStorage";
import { IUserService, IUserRepository, ICanvasList } from "./interfaces";

class UserService implements IUserService {
	private userRepository: IUserRepository;

	constructor(userRepository: IUserRepository) {
		this.userRepository = userRepository;
	}

	/** @description Write received canvas list to redux store. */
	async setCanvasList(ownerId: string) {
		const canvasList: any = await this.userRepository.getCanvasList(ownerId);
		const filteredCanvasList = await canvasList.map((item: ICanvasList, index: number) => {
			return {
				key: index++,
				id: item.id,
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