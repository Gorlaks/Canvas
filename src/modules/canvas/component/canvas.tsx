/** @module Canvas */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { message } from "antd";
import "./style.scss";

import localStorageApi from "../../../initialize/api/localStorageApi";
import canvasRepository from "../../../initialize/repositories/canvasRepository";
import { RoutePath } from "../../../utils/constants";
import { IUserAuthData } from "../../auth/interfaces";
import { IServerResponse } from "../../common/interfaces/interfaces";

import CanvasContent from "./fragments/canvasContent";
import ComponentLoading from "../../../assets/ui/componentLoading/componentLoading";

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
			canvasRepository.getCanvasById(userAuthData.access_token, canvasId)
				.then((response: IServerResponse) => {
                    if (response.code !== 0) {
                        message.error(`Error code - ${response.code}`);
                        return;
                    }
					setCanvasDataState(response?.message?.data);
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