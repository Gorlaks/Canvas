import { IHeaderService } from "./interfaces";
import { ILocalStorageApi } from "../common/storage/interfaces";
import { RoutePath } from "../../utils/constants";

class HeaderService implements IHeaderService {
  private localStorageApi: ILocalStorageApi;

  constructor(localStorageApi: ILocalStorageApi) {
    this.localStorageApi = localStorageApi;
  }

  /** @description Log out. */
  LogOut() {
    this.localStorageApi.clearLocalData();
    window.location.pathname = RoutePath.AUTH_PATH;
  }
}

export default HeaderService;