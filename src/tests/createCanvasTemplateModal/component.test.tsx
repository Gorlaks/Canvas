import React from 'react';
import ReactDOM from 'react-dom';

import CreateCanvasTemplateModal from "../../modules/createCanvasTemplateModal/component/createCanvasTemplateModal";

describe("Tests: CreateCanvasTemplateModal page", () => {
  it("Test: CreateCanvasTemplateModal main component", () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <CreateCanvasTemplateModal
        modalState={true}
        setModalState={() => { }}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});