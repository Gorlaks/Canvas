import { IAuthService, IAuthRepository, IRegistrationData } from "./interfaces";
import { IApiClient } from "../common/apiClient/interfaces";
import { ILocalStorageApi } from "../common/storage/interfaces";

class AuthService implements IAuthService {
	private authRepository: IAuthRepository;
	private localStorageApi: ILocalStorageApi;
	private apiClient: IApiClient;

	constructor(
		authRepository: IAuthRepository,
		localStorageApi: ILocalStorageApi,
		apiClient: IApiClient
	) {
		this.authRepository = authRepository;
		this.localStorageApi = localStorageApi;
		this.apiClient = apiClient;
	}

	/** @description Write user data to redux store after login. */
	async login(login: string, password: string) {
		const result = await this.authRepository.authentication(login, password);

		if (result.error) throw result.error;
		this.localStorageApi.setLocalData("userAuthData", result);
		
		return result;
	}

	/** @description User registration and write user data to redux store */
	async registration(data: IRegistrationData) {
		const result = await this.apiClient.sendRequest(data, "/registration");
		if (result.error) throw result.error;

		this.localStorageApi.setLocalData("userAuthData", result);
		return result;
	}
}

export default AuthService;