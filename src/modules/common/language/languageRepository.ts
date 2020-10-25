import commonStatesStorage from "../../../initialize/statesStorages/commonStatesStorage";
import * as languages from "./languageVariants/exportLanguages";
import { ILanguageRepository } from "./interfaces";

class LanguageRepository implements ILanguageRepository {
	getCurrentLanguage(): string {
		const language = commonStatesStorage.getState<string>("language");
		if(language) return language;
		else return "";
	}

	/** @description Check for current language and take current word in current language. */
	translate(sentense: string): string {
		const currentLanguage: string = this.getCurrentLanguage();
		const translatedWordList = (languages as any)[currentLanguage];
		
		try {
			return translatedWordList[sentense] || sentense;
		} catch {
			/** @description Return word from parament if it doesn't have current word in current language. */
			return sentense;
		}
	}
}

export default LanguageRepository;