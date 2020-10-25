import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import userStatesStorage from "../../../../initialize/statesStorages/userStatesStorage";
import authService from "../../../../initialize/services/authService";
import { LS } from "../../../../utils/helpers";
import { RoutePath } from "../../../../utils/constants";

const Login = () => {
	const history = useHistory();
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");

	/**
	 * @description Make a request to the server for login
	 * and put received information to redux store.
	 * @event onClick.
	*/
	const sendLogin = () => {
		if (!login || !password) {
			message.error(LS("Empty_field_error"));
			return;
		}

		const loading = message.loading(LS("Loading"), 100);
		authService.login(login, password)
			.then((item: Record<string, string>) => {
				if (!item.error) {
					userStatesStorage.setState("isAuthorized", true);
					history.push(RoutePath.USER_PATH);
				}
				else message.error(LS(item.error));
			})
			.catch((e: ExceptionInformation) => message.error(LS(e.toString())))
			.finally(() => loading());
	}

	const handleKeyPressRegist = (e: any) => {
		if (e.which === 13) sendLogin();
	};

	return (
		<div>
			<div className="auth__filed">
				<div className="auth__icon"><UserOutlined /></div>
				<input type="text" placeholder={LS("Login")} onKeyPress={handleKeyPressRegist}
					onChange={(e: any) => setLogin(e.target.value)} />
			</div>
			<div className="auth__filed">
				<div className="auth__icon"><LockOutlined /></div>
				<input type="password" placeholder={LS("Password")} onKeyPress={handleKeyPressRegist}
					onChange={(e: any) => setPassword(e.target.value)} />
			</div>
			<button className="auth__btn" onClick={sendLogin}>{LS("Login_button")}</button>
		</div>
	);
};

export default Login;