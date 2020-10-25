import React from "react";

import { IUserAuthData } from "../../../auth/interfaces";
import localStorageApi from "../../../../initialize/api/localStorageApi";
import adminService from "../../../../initialize/services/adminService";
import CanvasTemplateReview from "../../../../assets/ui/canvasTemplateReview/canvasTemplateReview";
import { LS } from "../../../../utils/helpers";
import { message } from "antd";

const CanvasTemplatesBoard = (props: {
  data: Array<any>,
  setCanvasTemplateList: any
}) => {
  const { data, setCanvasTemplateList } = props;
  const userAuthData: IUserAuthData = localStorageApi.getLocalData("userAuthData", {});
  return (
    <div className="canvas-templates-board">
      {Boolean(data.length) && data.map(item => {
        const canvasId = item.id;
        return (
          <div key={canvasId} className="canvas-templates-board__template-wrapper">
            <p className="canvas-templates-board__type-name">{item.type}</p>
            <div className="canvas-templates-board__template">
              <div className="canvas-templates-board__carpet"></div>
              <CanvasTemplateReview templateData={item} />
            </div>
            <div className="canvas-templates-board__actions">
              <button onClick={() => handleDeleteTemplate(canvasId, userAuthData.id, data, setCanvasTemplateList)}>{LS("Delete")}</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const handleDeleteTemplate = (
  canvasId: string,
  ownerId: string,
  data: any,
  setCanvasTemplateList: any
) => {
  const loading = message.loading("Loading", 100)
  adminService.deleteCanvasTemplate({
    ownerId,
    canvasId
  }).then(item => {
    if(item?.error) {
      message.error(LS(item?.error));
      return;
    }
    message.success(LS("Success"));
    const filteredList = data.filter((item: any) => item.id !== canvasId)
    setCanvasTemplateList(filteredList);
  })
  .catch(e => message.error(LS(e.toString())))
  .finally(() => loading())
}

export default CanvasTemplatesBoard;