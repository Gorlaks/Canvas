import LanguageService from "../../modules/common/language/languageService";
import { ILanguageService } from "../../modules/common/language/interfaces";

import localStorageApi from "../api/localStorageApi";

const languageService: ILanguageService = new LanguageService(localStorageApi);

export default languageService