import React, { useState } from "react";

import PlusButton from "../../../../assets/ui/plusButton/plusButton";
import CreateCanvasTemplateModal from "../../../createCanvasTemplateModal/component/createCanvasTemplateModal";
import { LS } from "../../../../utils/helpers";

const Panel = () => {
  const [createCanvasTemplateModalState, setCreateCanvasTemplateModalState] = useState(false);
  return (
    <div className="admin__panel">
      <div className="admin__panel__search">

      </div>
      <div className="admin__panel__creat-template-btn">
        {/* <div>
          <PlusButton text={LS("Create_canvas")} handleClick={() => {}} />
        </div> */}
        <div>
          <PlusButton text={LS("Create_template")} handleClick={() => setCreateCanvasTemplateModalState(true)} />
        </div>
      </div>
      <CreateCanvasTemplateModal
        modalState={createCanvasTemplateModalState}
        setModalState={setCreateCanvasTemplateModalState}
      />
    </div>
  )
}

export default Panel;