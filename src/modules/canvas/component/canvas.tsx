/** @module Canvas */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { message } from "antd";
import "./style.scss";

import localStorageApi from "../../../initialize/api/localStorageApi";
import canvasRepository from "../../../initialize/repositories/canvasRepository";
import { RoutePath } from "../../../utils/constants";
import { IUserAuthData } from "../../auth/interfaces";

import CanvasContent from "./fragments/canvasContent";
import ComponentLoading from "../../../assets/ui/componentLoading/componentLoading";
import { LS } from "../../../utils/helpers";

const Canvas = () => {
	const history = useHistory();

	const canvasId: string = localStorageApi.getLocalData("canvasId", "");
	const userAuthData: IUserAuthData = localStorageApi.getLocalData("userAuthData", {});

	/** @description Canvas data for building grid layout. */
	const [canvasDataState, setCanvasDataState] = useState({ data: null });

	/**
	 * @description Make a request about choosen canvas to the server
	 * and put received information to redux store.
	*/
	useEffect(() => {
		if (!canvasId) history.push(RoutePath.USER_PATH);
		else {
			canvasRepository.getCanvasById(userAuthData.id, canvasId)
				.then((item: any) => {
					if (!item.error) setCanvasDataState(item);
					else message.error(LS(item.error))
				});
		}
	}, [])

	return (
		<div className="canvas">
			{canvasDataState.data ? <CanvasContent canvasData={canvasDataState} />
				: <div className="canvas__component-loading"><ComponentLoading /></div>}
		</div>
	)
}

export default Canvas;