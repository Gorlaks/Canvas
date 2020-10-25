import userStatesStorage from "../../initialize/statesStorages/userStatesStorage";

import { ICanvasService, ICanvasData } from "./interfaces";
import { IApiClient } from "../common/apiClient/interfaces";

/**
 * The main class to process canvas data.
*/
class CanvasService implements ICanvasService {
  private apiClient: IApiClient;

  constructor(apiClient: IApiClient) {
    this.apiClient = apiClient;
  }

  /** @description Send post request for deleting canvas from database. */
  async deleteCanvas(ownerId: string, canvasId: string) {
    return await this.apiClient.sendRequest({
      ownerId,
      canvasId
    }, "/deleteCanvas");
  }

  /** @description Send post request for creating canvas for user. */
  async createCanvas(ownerId: string, title: string, type: string) {
    return await this.apiClient.sendRequest({
      ownerId,
      title,
      type
    }, "/createCanvas");
  }

  /** @description Change data in redux store after delete canvas from canvas list of user. */
  async setCanvasListAfterRemoving(canvasId: string) {
    const canvasList = userStatesStorage.getState<Array<ICanvasData>>("canvasList")
    ?.filter((item: ICanvasData) => item.id !== canvasId);
    await userStatesStorage.setState("canvasList", canvasList);
    await userStatesStorage.setState("filteredCanvasList", canvasList);
  }

  /** @description Send post request for update canvas in database. */
  async updateCanvas(canvasData: Record<string, any>) {
    return await this.apiClient.sendRequest({
      canvasId: canvasData.id,
      ownerId: canvasData.ownerId,
      title: canvasData.title,
      data: canvasData.data
    }, "/updateCanvas");
  }

  async downloadPdf(canvasData: ICanvasData) {
    return await this.apiClient.sendRequest({
      title: canvasData.title,
      data: canvasData.data
    }, "/createPdf");
  }
}

export default CanvasService;