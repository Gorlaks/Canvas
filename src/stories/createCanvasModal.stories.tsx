/** @description Stories of CreateCanvasModal component. */
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import 'antd/dist/antd.css';
import "../modules/createCanvasModal/style.scss";

import commonStatesStorage from "../initialize/statesStorages/commonStatesStorage";
import CreateCanvasModal from "../modules/createCanvasModal/createCanvasModal";

/** 
 * @description Modal window for canvas creating.
 * @module CreateCanvasModal.
*/
export const WithCreateCanvasModal = () => {
  commonStatesStorage.registState<string>("language", {
    state: "en",
    setState: () => {}
  });
  return (
    <Router>
      <CreateCanvasModal
        isOpened={true}
        setModalState={() => { }}
        userAuthData={{
          id: "",
          login: "",
          email: ""
        }}
      />
    </Router>
  );
};

export default { title: "CreateCanvasModal" };