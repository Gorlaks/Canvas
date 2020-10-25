import LocalStorageApi from "../../modules/common/storage/localStorageApi";
import { ILocalStorageApi } from "../../modules/common/storage/interfaces";

const localStorageApi: ILocalStorageApi = new LocalStorageApi();

export default localStorageApi;