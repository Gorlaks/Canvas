/** @module Admin */
import React from "react";
import { Tabs } from "antd";
import "./style.scss";

import { LS } from "../../../utils/helpers";
import Panel from "./fragments/panel";

import CanvasTemplatesBoardContainer from "./canvasTemplatesBoard/canvasTemplatesBoardContainer";
import UsersTableContainer from "./usersTable/usersTableContainer";

const { TabPane } = Tabs;

const Admin = () => {
  const tabBarStyle = {
		display: "flex",
		justifyContent: "center"
  }
  
  return (
    <div className="admin">
      <header>
        <p className="admin__title">{LS("Administration")}</p>
        <Panel />
      </header>
      <div className="admin__content">
        <Tabs defaultActiveKey="usersTable" size="large" tabBarStyle={tabBarStyle}>
          <TabPane tab={LS("Users")} key="usersTable">
            <UsersTableContainer />
          </TabPane>
          <TabPane tab={LS("Canvas_templates")} key="canvasTemplatesBoard">
            <CanvasTemplatesBoardContainer />
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default Admin;