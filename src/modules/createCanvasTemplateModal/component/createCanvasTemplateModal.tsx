/** @module CreateCanvasTemplateModal */
import React, { useState } from "react";
import { Modal, message } from "antd";
import "./style.scss";

import createCanvasTemplateModalService from "../../../initialize/services/createCanvasTemplateModalService";
import { LS } from "../../../utils/helpers";
import { ICreateCanvasTemplate } from "../../canvas/interfaces";
import { ICreateCanvasTemplateModalService } from "../interfaces";

import Preview from "./fragments/preview";
import LeftInUpColumn from "./fragments/leftInUpColumn";
import EmptyPreview from "./fragments/emptyPreview";
import RightInUpColumn from "./fragments/rightInUpColumn";
import CreateCanvasTemplateModalBody from "./fragments/createCanvasTemplateModalBody";


const CreateCanvasTemplateModal = (props: {
  modalState: boolean,
  setModalState: Function
}) => {
  const { modalState, setModalState } = props;

  const [loadingState, setLoadingState] = useState(false);
  /** @description default canvas template data. */
  const [templateState, setTemplateState] = useState({
    ownerId: null,
    title: null,
    type: null,
    date: null,
    rows: null,
    columns: null,
    data: [
      {
        position: [],
        title: "",
        content: "",
        description: ""
      },
    ]
  });

  return (
    <div className="create-canvas-template-modal">
      <Modal
        title={<p className="create-canvas-template-modal__title">{LS("Create_canvas_template")}</p>}
        visible={modalState}
        /** @description Create canvas template action. */
        onOk={() => handleCreateCanvasTemplate({
          createCanvasTemplateModalService,
          setLoadingState,
          setModalState,
          templateState
        })}
        onCancel={() => setModalState(false)}
        confirmLoading={loadingState}
        width={800}
      >
        <div className="create-canvas-template-modal__up">
          <LeftInUpColumn
            templateState={templateState}
            setTemplateState={setTemplateState}
          />
          {(() => {
            if(templateState.data[0].position.length === 0) return <EmptyPreview />;
            else return <Preview templateData={templateState} />;
          })()}
          <RightInUpColumn
            templateState={templateState}
            setTemplateState={setTemplateState}
          />
        </div>
        <div className="create-canvas-template-modal__low">
          <CreateCanvasTemplateModalBody
            templateState={templateState}
            setTemplateState={setTemplateState}
          />
        </div>
      </Modal>
    </div>
  )
}

/** @description Function for ok attribute in modal component */
const handleCreateCanvasTemplate = (props: {
  templateState: ICreateCanvasTemplate,
  createCanvasTemplateModalService: ICreateCanvasTemplateModalService,
  setLoadingState: Function,
  setModalState: Function
}) => {
  const {
    templateState,
    createCanvasTemplateModalService,
    setLoadingState,
    setModalState
  } = props;

  setLoadingState(true);
  createCanvasTemplateModalService.createCanvasTemplate(templateState)
    .then((item: Record<string, string>) => {
      if (item?.error) {
        message.error(LS(item?.error));
        return;
      };
      setModalState(false);
    })
    .catch((e: ExceptionInformation) => message.error(LS(e.toString())))
    .finally(() => setLoadingState(false));
}

export default CreateCanvasTemplateModal;