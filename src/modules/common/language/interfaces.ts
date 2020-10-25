export interface ILanguageRepository {
	getCurrentLanguage(): string;
	translate(sentense: string): string
}

export interface ILanguageService {
	changeLanguage(language: string): void;
}