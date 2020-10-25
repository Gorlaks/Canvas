import React from "react";
import "./style.scss";

import { ICreateCanvasTemplate, ICanvasBlocksData, } from "../../../modules/canvas/interfaces";
import { LS } from "../../../utils/helpers";

const CanvasTemplateReview = (props: {
  templateData: ICreateCanvasTemplate
}) => {
  const { templateData } = props;
  const { columns, rows, data } = templateData;

  const canvasContentStyles = {
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`
  }

  return (
    <div className="canvas-template-review" style={canvasContentStyles}>
      {Boolean(data.length && data.map) && data.map((item: ICanvasBlocksData, index: number) => {
        const { position, title } = item;
        const canvasItemStyles = {
          gridArea: `${position[0]}/${position[1]}/${position[2]}/${position[3]}`
        }
        return (
          data[index].position.length > 0 && <div key={index} style={canvasItemStyles}>
            <p>
              <span>{++index}.</span> {LS(title)}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default CanvasTemplateReview;