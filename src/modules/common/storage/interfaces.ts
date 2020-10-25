export interface ILocalStorageApi {
	setLocalData(key: string, value: any): void;
	getLocalData(key: string, defaultValue: any): any;
	clearLocalData(): void;
}