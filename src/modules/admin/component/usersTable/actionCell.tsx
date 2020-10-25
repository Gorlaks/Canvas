import React from "react";

import { LS } from "../../../../utils/helpers";

/**@description Cell with some actions in table of users.*/
const ActionCell = () => {
  return (
    <div className="users__table__actions">
      <button>
        {LS("Delete")}
      </button>
    </div>
  )
}

export default ActionCell;