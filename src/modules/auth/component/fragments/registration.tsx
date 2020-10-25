import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { message } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";

import userStatesStorage from "../../../../initialize/statesStorages/userStatesStorage";
import authService from "../../../../initialize/services/authService";
import { LS } from "../../../../utils/helpers";
import { RoutePath } from "../../../../utils/constants";

const Registration = () => {
	const history = useHistory();

	const [login, setLogin] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	/**
	 * @description Make a request to the server for registration
	 * and put received information to redux store.
	 * @event onClick.
	*/
	const sendRegistration = () => {
		if (!login || !password || !email) {
			message.error(LS("Empty_field_error"));
			return;
		}

		const loading = message.loading(LS("Loading"));
		authService.registration({ email, login, password })
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
		if (e.which === 13) sendRegistration();
	}

	return (
		<div>
			<div className="auth__filed">
				<div className="auth__icon"><MailOutlined /></div>
				<input type="email" placeholder={LS("Email")}
					onKeyPress={handleKeyPressRegist} onChange={(e: any) => setEmail(e.target.value)} />
			</div>
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
			<button className="auth__btn" onKeyPress={(e: any) => {
				if (e.keyCode === 13) sendRegistration();
			}} onClick={() => sendRegistration()}>
				{LS("Registration_button")}
			</button>
		</div>
	)
}

export default Registration;