import React from "react";
import { useHistory } from "react-router-dom";
import { message } from "antd";

import canvasService from "../../../../initialize/services/canvasService";
import localStorageApi from "../../../../initialize/api/localStorageApi";
import { LS } from "../../../../utils/helpers";
import { RoutePath } from "../../../../utils/constants";
import { ICanvasService } from "../../../canvas/interfaces";
import { ILocalStorageApi } from "../../../common/storage/interfaces";
import { IUserAuthData } from "../../../auth/interfaces";

/** @description Cell with some actions like edit and delete canvas. */
const ActionCell = (props: {
  userAuthData: IUserAuthData,
  record: any
}) => {
  /** @description record - data about all items in antd table. */
  const { userAuthData, record } = props;
  const history = useHistory();
  
  return (
    <div className="user__table__actions">
      <button className="user__table__action-btn" onClick={() => handleEdit({
        localStorageApi, record, history
      })}>{LS("Edit")}</button>

      <div className="user__table__actions-separator"></div>

      <button className="user__table__action-btn" onClick={() => handleDelete({
        canvasService, userAuthData, record
      })}>{LS("Delete")}</button>
    </div>
  )
}

/** @description Function for opening canvas and edit it. */
const handleEdit = (props: {
  localStorageApi: ILocalStorageApi,
  record: any,
  history: any
}) => {
  const { localStorageApi, record, history } = props;

  localStorageApi.setLocalData("canvasId", record.id);
  const canvasId = localStorageApi.getLocalData("canvasId", null);
  if (!canvasId) message.error(LS("Id_is_not_found"));
  else history.push(RoutePath.CANVAS_PATH)
}

/** @description Function for deleting canvas. */
const handleDelete = (props: {
  canvasService: ICanvasService,
  userAuthData: IUserAuthData,
  record: any
}) => {
  const { canvasService, userAuthData, record } = props;

  const loading = message.loading(LS("Loading"));
  canvasService.deleteCanvas(userAuthData.id, record.id)
    .then((item: Record<string, string>) => {
      if (!item.error) canvasService.setCanvasListAfterRemoving(item.id);
      else message.error(LS(item.error));
    })
    .catch((e: ExceptionInformation) => message.error(LS(e.toString())))
    .finally(() => loading());
}

export default ActionCell;