import React from 'react';
import ReactDOM from 'react-dom';

import Header from "../../modules/header/component/header";

describe("Tests: Header page", () => {
  let languageStore: any;

  it("Test: Header main component", () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Header />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});