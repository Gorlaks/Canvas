import HeaderService from "../../modules/header/headerService";
import { IHeaderService } from "../../modules/header/interfaces";

import localStorageApi from "../api/localStorageApi";

const headerService: IHeaderService = new HeaderService(localStorageApi);

export default headerService;