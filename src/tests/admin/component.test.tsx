import React from 'react';
import ReactDOM from 'react-dom';

import Admin from "../../modules/admin/component/admin";

describe("Tests: Admin page", () => {
  it("Test: Admin main component", () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Admin />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});