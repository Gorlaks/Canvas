/** @module Authorization */
import React from "react";
import { Tabs } from "antd";
import "./style.scss";

import Login from "./fragments/login";
import Registration from "./fragments/registration";
import { LS } from "../../../utils/helpers";

const { TabPane } = Tabs;

/** @description Login and registration components in tabs */
const Auth = () => {
	const tabBarStyle = {
		display: "flex",
		justifyContent: "center"
	}
	
	return (
		<div className="auth">
			<div className="auth__form">
				<Tabs defaultActiveKey="Login" size="large" tabBarStyle={tabBarStyle}>
					<TabPane tab={LS("Login_tab")} key="Login">
						<Login />
        </TabPane>
					<TabPane tab={LS("Registration_tab")} key="Registration">
						<Registration />
        </TabPane>
				</Tabs>
			</div>
		</div>
	);
};

export default Auth;