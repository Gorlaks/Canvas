import { message } from "antd";

import { LS } from "../../../../utils/helpers";
import { ICanvasService, ICanvasBlocksData } from "../../interfaces";

/**
 * @description Write user's content of canvas to canvasData.data for sending to the server.
*/
export const writeContentToCanvasDataBlocks = (e: any, canvasData: Record<string, any>) => {
	canvasData.data = canvasData.data.map((item: ICanvasBlocksData) => {
		if (item.title === e.target.dataset.title) {
			item.content = e.target.value;
			return item
		}
		return item
	})
};

/**
 * @description Update canvas function.
*/
export const handleUpdate = (props: {
	canvasData: Record<string, any>,
	canvasService: ICanvasService
}) => {
	const { canvasData, canvasService } = props;
	const loading = message.loading(LS("Loading"));
	canvasService.updateCanvas(canvasData)
		.then((item: Record<string, string>) => {
			if (!item.error) message.success(LS("Canvas_success_update"));
			else message.error(LS(item.error));
		})
		.catch((e: ExceptionInformation) => message.error(LS(e.toString())))
		.finally(() => loading());
};

/**
 * @description The method for download canvas in pdf format.
*/
export const handleDownloadPdf = (props: {
	canvasData: Record<string, any>,
	canvasService: ICanvasService
}) => {
	const { canvasData, canvasService } = props;
	const loading = message.loading(LS("Loading"), 100);
	canvasService.downloadPdf(canvasData)
		.then((item: Record<string, string>) => {
			if (!item.error) window.open(item.pathToDocument);
			else message.error(LS(item.error));
		})
		.catch((e: ExceptionInformation) => message.error(LS(e.toString())))
		.finally(() => loading());
};