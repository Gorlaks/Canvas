import { ILocalStorageApi } from "./interfaces";

class LocalStorageApi implements ILocalStorageApi {
	setLocalData(key: string, value: any) {
		localStorage.setItem(key, JSON.stringify(value));
	};
	
	getLocalData(key: string, defaultValue: any) {
		const value: string = localStorage.getItem(key) || defaultValue;
		try {
			const result = JSON.parse(value);
			if(result === "undefined") return null;
			return result;
		} catch {
			return value;
		}
	};

	clearLocalData() {
		localStorage.clear();
	}
}

export default LocalStorageApi;