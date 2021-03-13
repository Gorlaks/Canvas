import userStatesStorage from "../../initialize/statesStorages/userStatesStorage";

import { ICanvasService, ICanvasData } from "./interfaces";
import { IApiClient } from "../common/apiClient/interfaces";
import localStorageApi from "../../initialize/api/localStorageApi";

/**
 * The main class to process canvas data.
*/
class CanvasService implements ICanvasService {
    private apiClient: IApiClient;

    constructor(apiClient: IApiClient) {
        this.apiClient = apiClient;
    }

    /** @description Send post request for deleting canvas from database. */
    async deleteCanvas(access_token: string, canvasId: string) {
        return await this.apiClient.sendDeleteRequest(`/delete_canvas?access_token=${access_token}&canvas_id=${canvasId}`);
    }

    /** @description Send post request for creating canvas for user. */
    async createCanvas(access_token: string, title: string, type: string) {
        return await this.apiClient.sendRequest({
            access_token,
            title,
            type
        }, "/create_canvas");
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
        const access_token: string = localStorageApi.getLocalData("userAuthData", {}).access_token;
        return await this.apiClient.sendRequest({
            access_token,
            canvas_id: canvasData["_id"],
            title: canvasData.title,
            data: canvasData.data
        }, "/update_canvas");
    }

    async downloadPdf(canvasData: ICanvasData) {
        return await this.apiClient.sendRequest({
            title: canvasData.title,
            data: canvasData.data
        }, "/createPdf");
    }
}

export default CanvasService;