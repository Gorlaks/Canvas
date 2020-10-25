/** @description Stories of CreateCanvasTemplateModal component. */
import React from "react";

import 'antd/dist/antd.css';
import "../modules/createCanvasTemplateModal/component/style.scss";

import commonStatesStorage from "../initialize/statesStorages/commonStatesStorage";
import CreateCanvasTemplateModal from "../modules/createCanvasTemplateModal/component/createCanvasTemplateModal";

/** 
 * @description Modal window for canvas template creating.
 * @module CreateCanvasTemplateModal.
*/
export const WithCreateCanvasTemplateModal = () => {
  commonStatesStorage.registState<string>("language", {
    state: "en",
    setState: () => {}
  });
  return (
    <CreateCanvasTemplateModal
      modalState={true}
      setModalState={() => { }}
    />
  );
};

export default { title: "CreateCanvasTemplateModal" };