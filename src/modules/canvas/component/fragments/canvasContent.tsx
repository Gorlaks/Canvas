import React from "react";
import { useHistory } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";

import canvasService from "../../../../initialize/services/canvasService";
import PlusButton from "../../../../assets/ui/plusButton/plusButton";
import { newStrokeInTextArea, resizeContainer, LS } from "../../../../utils/helpers";
import { RoutePath } from "../../../../utils/constants";
import { handleUpdate, writeContentToCanvasDataBlocks, handleDownloadPdf } from "./functions";

const CanvasContent = (props: {
	canvasData: Record<string, any>
}) => {
	const history = useHistory();
	const { canvasData } = props;
	const { columns, rows, data, title, type } = canvasData;

	/** @description Create grid layout. */
	const canvasContentStyles = {
		gridTemplateRows: `repeat(${rows}, 1fr)`,
		gridTemplateColumns: `repeat(${columns}, 1fr)`
	}

	return (
		<div>
			{/** @description Component with some actions like update, download, etc. */}
			<header className="canvas__header">
				<div className="canvas__header__up">
					<button className="back-arrow" onClick={() => history.push(RoutePath.USER_PATH)}><LeftOutlined /></button>
					<span className="title">{LS("Editing")} {LS("Canvas")}</span>
					<span className="type">{type}</span>
					<PlusButton text={LS("Save")} handleClick={() => handleUpdate({canvasData, canvasService})} />
				</div>
				<div className="canvas__header__low">
					<input type="text" placeholder={LS("Enter_canvas_name")} defaultValue={title} onChange={(e: any) => canvasData.title = e.target.value} />
					<div className="canvas__header__low__buttons">
						<button onClick={() => handleDownloadPdf({canvasData, canvasService})}>{LS("Download_pdf")}</button>
					</div>
				</div>
			</header>

			{/** @description Grid layout with canvas data. */}
			<div className="canvas__body" style={canvasContentStyles}>
				<div className="canvas__body__background"></div>
				{canvasData.id && Object.keys(data).map((item, index) => {
					const { position, title, content, description } = (data as any)[item];
					const canvasItemStyles = {
						gridArea: `${position[0]}/${position[1]}/${position[2]}/${position[3]}`
					}
					return (
						<div key={index} style={canvasItemStyles}>
							<p className="canvas__body__title">
								{++index}. {LS(title)}
							</p>
							<textarea
								data-title={title}
								placeholder={LS(description)}
								defaultValue={content}
								onKeyPress={newStrokeInTextArea}
								onChange={(e: any) => {
									resizeContainer(e);
									writeContentToCanvasDataBlocks(e, canvasData)
								}}
								className="canvas__body__content"
							></textarea>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default CanvasContent;