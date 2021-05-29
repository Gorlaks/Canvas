import { message } from "antd";
import { jsPDF } from "jspdf";

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
        .then((item: Record<string, any>) => {
            if (item?.code === 0) message.success(LS("Canvas_success_update"));
            else message.error(LS(item.message));
        })
        .catch((e: ExceptionInformation) => message.error(LS(e.toString())))
        .finally(() => loading());
};

/**
 * @description Send canvas to mail.
*/
export const handleSend = (props: {
    canvasData: Record<string, any>,
    canvasService: ICanvasService
}) => {
    const { canvasData, canvasService } = props;
    const loading = message.loading(LS("Loading"));
    canvasService.sendCanvas(canvasData)
        .then((item: Record<string, any>) => {
            if (item === null) message.success(LS("Canvas sent successfully"));
            else message.error(LS(item.message));
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
    const { canvasData } = props;
    const doc = new jsPDF();

    const mainTitle = "";
    let content = "";

    canvasData.data.forEach((item: any) => 
    {
        content += `${item.title}: ${item.content}\n`;
    });

    content += "";

    const htmlString = mainTitle + content;

    doc.text(htmlString, 10, 10);
    doc.save("canvas.pdf");
};