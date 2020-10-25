import React from "react";
import { Menu as AntMenu } from "antd";

import headerService from "../../../../initialize/services/headerService";

enum Keys {
  LOG_OUT = "LogOut"
}

const { SubMenu } = AntMenu;

const Menu = (props: {
  login: string
}) => {
  return (
    <AntMenu mode="horizontal" onClick={handleActions}>
      <SubMenu
        style={{ border: "none" }}
        title={
          <p className="submenu-title-wrapper">
            {props.login}
          </p>
        }
      >
        <AntMenu.Item key={Keys.LOG_OUT}>Log out</AntMenu.Item>
      </SubMenu>
    </AntMenu>
  )
}

const handleActions = (props: {
  key: string,
}) => {
  const { key } = props;
  if(key === Keys.LOG_OUT) headerService.LogOut();
}

export default Menu;