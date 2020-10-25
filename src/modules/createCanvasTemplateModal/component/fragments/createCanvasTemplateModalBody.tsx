import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

import { LS } from "../../../../utils/helpers";
import { ICreateCanvasTemplate } from "../../../canvas/interfaces";

const CreateCanvasTemplateModalBody = (props: {
  templateState: ICreateCanvasTemplate,
  setTemplateState: Function
}) => {
  const { templateState, setTemplateState } = props;
  const [countDataItemState, setCountDataItemState] = useState([0]);
  return (
    <>
      {countDataItemState.map((item, index) => {
        return (
          <div key={index}>
            <input type="text" placeholder={LS("Position")} onChange={(e: any) => {
              templateState.data[index].position = e.target.value.split(",")
              .map((item: string) => parseInt(item, 10));
              setTemplateState({ ...templateState });
            }} />
            <input type="text" placeholder={LS("Canvas_block_title")} onChange={(e: any) => {
              templateState.data[index].title = e.target.value;
              setTemplateState({ ...templateState });
            }} />
            <textarea placeholder={LS("Description")} onChange={(e: any) => {
              templateState.data[index].description = e.target.value;
              setTemplateState({ ...templateState });
            }}></textarea>
          </div>
        );
      })}
      <div className="add-btn">
        {/**
         * @description Add new block to grid layout.
         * @event
        */}
        <button onClick={() => {
          templateState.data.push({
            position: [],
            title: "",
            content: "",
            description: ""
          });
          setTemplateState(templateState);
          setCountDataItemState([
            ...countDataItemState,
            ++countDataItemState[countDataItemState.length - 1]
          ])
        }}><PlusOutlined /></button>
      </div>
    </>
  )
}

export default CreateCanvasTemplateModalBody;