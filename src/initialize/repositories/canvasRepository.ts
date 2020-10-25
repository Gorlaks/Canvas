import CanvasRepository from "../../modules/canvas/canvasRepository";
import { ICanvasRepository } from "../../modules/canvas/interfaces";

import apiClient from "../api/apiClient";

const canvasRepository: ICanvasRepository = new CanvasRepository(apiClient);

export default canvasRepository;