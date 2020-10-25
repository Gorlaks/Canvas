import CanvasService from "../../modules/canvas/canvasService";
import { ICanvasService } from "../../modules/canvas/interfaces";

import apiClient from "../api/apiClient";

const canvasService: ICanvasService = new CanvasService(apiClient);

export default canvasService;