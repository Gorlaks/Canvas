/** @module Header */
import React, { useState, useEffect } from "react";
import { UserOutlined } from "@ant-design/icons";
import "./style.scss";

import userStatesStorage from "../../../initialize/statesStorages/userStatesStorage";
import languageService from "../../../initialize/services/languageService";
import localStorageApi from "../../../initialize/api/localStorageApi";

import Menu from "./fragments/menu";

const Header = () => {
	const [isAuthorized, setIsAuthorized] = useState(false);
	const userAuthData = localStorageApi.getLocalData("userAuthData", {});
	const { login, id } = userAuthData;

	userStatesStorage.registState<boolean>("isAuthorized", {
		state: isAuthorized,
		setState: setIsAuthorized
	});

	useEffect(() => {
		if(Boolean(id)) setIsAuthorized(true);
	}, [])

	return (
		<div className="header">
			<div className="header__languages">
				<button onClick={() => languageService.changeLanguage("ru")}>ru</button>
				<button onClick={() => languageService.changeLanguage("en")}>en</button>
			</div>
			<div className="header__user">
				{isAuthorized && <div className="header__user-wrapper">
					<div className="header__user-logo"><UserOutlined /></div>
					<Menu login={login}/>
				</div>}
			</div>
		</div>
	);
};

export default React.memo(Header);