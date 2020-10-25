/** @description Stories of Header component. */
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import 'antd/dist/antd.css';
import "../modules/canvas/component/style.scss";

import commonStatesStorage from "../initialize/statesStorages/commonStatesStorage";
import CanvasContent from "../modules/canvas/component/fragments/canvasContent";


const fakeLeanCanvasData = {
  "id": "5e7614f8f4c49a281c83acae",
  "ownerId":"5e53b6871c9d440000527bc4",
  "title": "ForDownload",
  "type": "Lean",
  "date": "03/25/2020 11:48:35",
  "rows": "3",
  "columns": "5",
  "data": [{
    "position": [1, 5, 3, 5],
    "title": "Consumer segments",
    "content": "",
    "description": "Who are we working for? Who is the most important customer for us?"
  }, {
    "position": [1, 3, 3, 3],
    "title": "Key values",
    "content": "",
    "description": "What customer problems do we solve? What is valuable in our offer?"
  }, {
    "position": [2, 4, 2, 4],
    "title": "Channels",
    "content": "",
    "description": "What channels do our customers want to receive our values through?"
  }, {
    "position": [1, 4, 1, 4],
    "title": "customer relationship",
    "content": "",
    "description": "What is our relationship with each of the segments? How are they integrated?"
  }, {
    "position": [3, 4, 3, 6],
    "title": "Profit streams",
    "content": "",
    "description": "What are our customers willing to pay for? What are they paying for now? How do they pay? What is the share of each of the flows in the total income?"
  }, {
    "position": [2, 2, 3, 3],
    "title": "Key resources",
    "content": "",
    "description": "What key resources do we need to create core values?"
  }, {
    "position": [1, 2, 1, 2],
    "title": "Key acts",
    "content": "",
    "description": "What key actions do we need to work? For distribution channels?"
  }, {
    "position": [1, 1, 3, 1],
    "title": "Key partners",
    "content": "",
    "description": "Who are our key partners? Who are our key suppliers?"
  }, {
    "position": [3, 1, 3, 4],
    "title": "Cost structure",
    "content": "",
    "description": "What are the most important costs associated with a business model? Which key resources are the most expensive?"
  }]
};


/**
 * @description Canvas component.
 * @module Canvas.
*/
export const WithCanvas = () => {
  commonStatesStorage.registState<string>("language", {
    state: "en",
    setState: () => {}
  });
  return (
    <Router>
      <CanvasContent
        canvasData={fakeLeanCanvasData}
      />
    </Router>
  );
};

export default { title: "Canvas" };