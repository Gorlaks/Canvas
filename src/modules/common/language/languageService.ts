import commonStatesStorage from "../../../initialize/statesStorages/commonStatesStorage";
import { ILanguageService } from "./interfaces";
import { ILocalStorageApi } from "../storage/interfaces";

class LanguageService implements ILanguageService {
	private localStorageApi: ILocalStorageApi;

  constructor(localStorageApi: ILocalStorageApi) {
    this.localStorageApi = localStorageApi;
  }

	/** @description Write language to redux store and local storage. */
	changeLanguage(language: string): void {
		commonStatesStorage.setState("language", language);
		this.localStorageApi.setLocalData("language", language);
	}
}

export default LanguageService;