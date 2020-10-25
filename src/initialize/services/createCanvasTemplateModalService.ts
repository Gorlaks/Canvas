import CreateCanvasTemplateModalService from "../../modules/createCanvasTemplateModal/createCanvasTemplateModalService";
import { ICreateCanvasTemplateModalService } from "../../modules/createCanvasTemplateModal/interfaces";

import apiClient from "../api/apiClient";

const createCanvasTemplateModalService: ICreateCanvasTemplateModalService = new CreateCanvasTemplateModalService(apiClient);

export default createCanvasTemplateModalService;