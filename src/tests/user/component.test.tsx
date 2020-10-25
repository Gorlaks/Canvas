import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import commonStatesStorage from '../../initialize/statesStorages/commonStatesStorage';
import User from "../../modules/user/component/user";

describe("Tests: User page", () => {
  commonStatesStorage.registState<string>("language", {
    state: "en",
    setState: () => {}
  });
  
  it("Test: User main component", () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <User />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});