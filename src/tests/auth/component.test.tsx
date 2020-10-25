import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import commonStatesStorage from '../../initialize/statesStorages/commonStatesStorage';
import Login from '../../modules/auth/component/fragments/login';
import Registration from '../../modules/auth/component/fragments/registration';

describe("Tests: Auth page", () => {
  let div: any = null;
  beforeEach(() => {
    div = document.createElement('div');
    commonStatesStorage.registState<string>("language", {
      state: "en",
      setState: () => {}
    });
  });

  it("Test: Login component", () => {
    ReactDOM.render(
      <Router>
        <Login />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Test: Registration component", () => {
    ReactDOM.render(
      <Router>
        <Registration />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});