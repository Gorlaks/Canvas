import React from "react";

import { LS } from "../../../../utils/helpers";
import { ICreateCanvasTemplate } from "../../../canvas/interfaces";

const LeftInUpColumn = (props: {
  templateState: ICreateCanvasTemplate,
  setTemplateState: Function
}) => {
  const { templateState, setTemplateState } = props;
  return (
    <div className="left-in-up-column">
      <div className="left-in-up-column__fields">
        <div>
          <p>{LS("Rows_total")}</p>
          <input type="text" onChange={(e: any) => {
            templateState.rows = parseInt(e.target.value, 10) || null;
            setTemplateState({ ...templateState });
          }} />
        </div>
        <div>
          <p>{LS("Columns_total")}</p>
          <input type="text" onChange={(e: any) => {
            templateState.columns = parseInt(e.target.value, 10) || null;
            setTemplateState({ ...templateState });
          }} />
        </div>
      </div>
      {/** @description Description about position field. */}
      <div className="left-in-up-column__description">
        <span>{LS("Position")} - [1, 2, 3, 4]</span>
        <p>1 - {LS("Row_start")}</p>
        <p>2 - {LS("Column_start")}</p>
        <p>3 - {LS("Row_end")}</p>
        <p>4 - {LS("Column_end")}</p>
      </div>
    </div>
  )
}

export default LeftInUpColumn;