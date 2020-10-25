import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import Canvas from "../../modules/canvas/component/canvas";

describe("Tests: Canvas page", () => {
  it("Test: Canvas main component", () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Canvas />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});