import React from "react";

import { LS } from "../../../../utils/helpers";

/** @description the inscription - Preview if canvas data is empty */
const EmptyPreview = () => {
  return (
    <div className="empty-preview">
      <div className="preview__cover"></div>
      <p>{LS("Preview")}</p>
    </div>
  )
}

export default EmptyPreview;