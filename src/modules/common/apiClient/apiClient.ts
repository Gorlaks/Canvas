import { IApiClient, IBody } from "./interfaces";

class ApiClient implements IApiClient {
	private url: string;

	constructor(url: string) {
		this.url = url;
	}

	/** @description Method for sending post requests to the server. */
	async sendRequest(body: IBody, path: string) {
		const answer = await fetch(`${this.url}${path}`, {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		});
		
		return answer.json();
	}

    async sendGetRequest(path: string) {
        const answer = await fetch(`${this.url}${path}`);

        return answer.json();
    }

    async sendDeleteRequest(path: string) {
        const answer = await fetch(`${this.url}${path}`, {
            method: "DELETE"
        });

        return answer.json();
    }
}

export default ApiClient;