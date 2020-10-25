import React, { useState, useEffect } from "react";
import { message } from "antd";

import adminStatesStorage from "../../../../initialize/statesStorages/adminStatesStorage";
import localStorageApi from "../../../../initialize/api/localStorageApi";
import adminRepository from "../../../../initialize/repositories/adminRepository";
import UsersTable from "./usersTable";
import ActionCell from "./actionCell";
import { LS } from "../../../../utils/helpers";
import { IUsers } from "../../interfaces";

const UsersTableContainer = () => {
	const [usersList, setUsersList] = useState([]);

	adminStatesStorage.registState<Array<IUsers> | []>("usersList", {
		state: usersList,
		setState: setUsersList
	});

	useEffect(() => {
		const loading = message.loading(LS("Loading"), 1000);
		const ownerId: string = localStorageApi.getLocalData("userAuthData", {}).id;
		adminRepository.getUsersList(ownerId)
			.then((item: any) => {
				if(item.error) {
					message.error(LS(item.error));
					return;
				}
				const filteredList = item.map((elem: any, index: number) => {
					return {
						id: elem.id,
						login: elem.login,
						email: elem.email,
						key: index
					}
				});
				adminStatesStorage.setState("usersList", filteredList);
			})
			.catch((e: string) => message.error(LS(e)))
			.finally(() => loading());
	}, [])

	/**@description Table columns.*/
	const columns = [
		{
			title: "id",
			dataIndex: "id",
			key: "id"
		},
		{
			title: LS("Login"),
			dataIndex: "login",
			key: "login"
		},
		{
			title: LS("Email"),
			dataIndex: "email",
			key: "email"
		}
		// {
		// 	title: LS("Role"),
		// 	dataIndex: "role",
		// 	key: "role"
		// },
		// {
		// 	title: LS("Actions"),
		// 	dataIndex: "actions",
		// 	key: "actions",
		// 	render: (text: any, record: any) => {
		// 		return (
		// 			<ActionCell />
		// 		)
		// 	}
		// }
	];

	return (
		<UsersTable
			columns={columns}
			data={usersList.length ? usersList : []}
		/>
	)
}

export default UsersTableContainer;