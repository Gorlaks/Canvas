/** @module CreateCanvasModal */
import React, { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Modal, message, Select } from "antd";
import "./style.scss";

import canvasService from "../../initialize/services/canvasService";
import canvasRepository from "../../initialize/repositories/canvasRepository";
import localStorageApi from "../../initialize/api/localStorageApi";
import { LS } from "../../utils/helpers";
import { RoutePath } from "../../utils/constants";
import { IUserAuthData } from "../auth/interfaces";
import { ICanvasTemplate } from "../admin/interfaces";

const { Option } = Select;

const CreateCanvasModal = (props: {
  isOpened: boolean,
  setModalState: Function,
  userAuthData: IUserAuthData
}) => {
  const { isOpened, setModalState, userAuthData } = props;

  const history = useHistory();

  /** @description Splash icon state in ok button. */
  const [loadingState, setLoadingState] = useState(false);
  const [title, setTitle] = useState("");
  const [canvasType, setCanvasType] = useState("Lean");
  const [canvasTypes, serCanvasTypes] = useState([]);

  useEffect(() => {
    canvasRepository.getCanvasTypes(userAuthData.id)
    .then((item: any) => {
      if(item?.error) {
        message.error(LS(item.error));
        return;
      }
      const filteredCanvasTypes = item.map((item: ICanvasTemplate) => ({ id: item.id, type: item.type }));
      serCanvasTypes(filteredCanvasTypes);
      
    })
  }, []);

  return (
    <div className="create-canvas-modal">
      <Modal
        visible={isOpened}
        /** @description Create canvas action. */
        onOk={() => {
          const ownerId = userAuthData.id;
          setLoadingState(true);
          canvasService.createCanvas(ownerId, title, canvasType)
            .then((item: Record<string, string>) => {
              if (!item.error) {
                localStorageApi.setLocalData("canvasId", item.id);
                setLoadingState(false);
                history.push(RoutePath.CANVAS_PATH);
              } else message.error(LS(item.error));
            })
            .catch((e: ExceptionInformation) => {
              message.error(LS(e.toString()))
              setLoadingState(false);
            });
        }}
        confirmLoading={loadingState}
        onCancel={() => setModalState(false)}
        width={431}
      >
        <div className="create-canvas-modal__title">
          <p>{LS("Create")} {LS("Canvas")}</p>
        </div>
        <div className="create-canvas-modal__name-field">
          <input
            type="text"
            placeholder={LS("Enter_canvas_name")}
            onChange={(e: any) => setTitle(e.target.value)}
          />
        </div>
        <div className="create-canvas-modal__type-choice">
          <Select defaultValue="Lean" style={{ width: 120 }} onChange={useCallback((type: string) => setCanvasType(type), [])}>
            {canvasTypes.map((item: { id: string, type: string }) => {
              const { id, type } = item
              return <Option key={id} value={type}>{type}</Option>
            })}
          </Select>
        </div>
      </Modal>
    </div>
  )
}

export default CreateCanvasModal;