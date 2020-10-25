import React from "react";

import { LS } from "../../../../utils/helpers";
import { ICreateCanvasTemplate } from "../../../canvas/interfaces";

/** @description Block with name of template field. */
const RightInUpColumn = (props: {
  templateState: ICreateCanvasTemplate,
  setTemplateState: Function
}) => {
  const { templateState, setTemplateState } = props;
  return (
    <div className="right-in-up-column">
      <input type="text" onChange={(e: any) => {
        templateState.type = e.target.value;
        setTemplateState({ ...templateState });
      }} placeholder={LS("Template_name")}/>
    </div>
  )
}

export default RightInUpColumn;