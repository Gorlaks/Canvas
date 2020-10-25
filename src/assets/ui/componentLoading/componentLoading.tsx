import React from "react";
import { SyncOutlined } from "@ant-design/icons";
import "./style.scss";

const ComponentLoading = () => {
  return (
    <div className="component-loading">
      <SyncOutlined spin />
    </div>
  )
}

export default ComponentLoading;