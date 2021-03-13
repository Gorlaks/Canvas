import { ICanvasRepository } from "./interfaces";
import { IApiClient } from "../common/apiClient/interfaces";

class CanvasRepository implements ICanvasRepository {
    private apiClient: IApiClient;

    constructor(apiClient: IApiClient) {
        this.apiClient = apiClient;
    }

    /** @description Send post request receiving canvas from server by canvas id. */
    async getCanvasById(access_token: string, canvasId: string) {
        const answer = await this.apiClient.sendGetRequest(`/get_canvas?access_token=${access_token}&canvas_id=${canvasId}`);

        return answer;
    }

    async getCanvasTypes(access_token: string) {
        return await this.apiClient.sendGetRequest(`/canvas_templates?access_token=${access_token}`);
    }

}

export default CanvasRepository;