import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import CreateCanvasModal from "../../modules/createCanvasModal/createCanvasModal";

describe("Tests: CreateCanvasModal page", () => {
  it("Test: CreateCanvasModal main component", () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <CreateCanvasModal
          isOpened={true}
          setModalState={() => {}}
          userAuthData={{ id: "", login: "", email: "" }}
        />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});