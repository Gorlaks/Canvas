import React, { useEffect, useState } from "react";
import { Table as AntTable } from "antd";

import userService from "../../../../initialize/services/userService";
import { LS } from "../../../../utils/helpers";
import { ICanvasList } from "../../interfaces";
import ActionCell from "./actionCell";
import ComponentLoading from "../../../../assets/ui/componentLoading/componentLoading";
import { IUserAuthData } from "../../../auth/interfaces";


const Table = (props: {
	userAuthData: IUserAuthData
	filteredCanvasList: Array<ICanvasList>
	setFilteredCanvasList: Function
}) => {
	const { userAuthData, filteredCanvasList, setFilteredCanvasList } = props;
	const [tableLoading, setTableLoading] = useState(true);

	/**
	 * @description Make a request to the server for canvas list of current user
	 * and put received information to redux store.
	*/
	useEffect(() => {
		const { id } = userAuthData;
		userService.setCanvasList(id)
		.then((item: any) => setFilteredCanvasList(item))
		.finally(() => setTableLoading(false));
	}, [])

	/**@description Table columns.*/
	const columns = [
		{
			title: LS("Title"),
    	dataIndex: "title"
		},
		{
			title: LS("Last_update"),
    	dataIndex: "lastUpdate"
		},
		{
			title: LS("Template_type"),
    	dataIndex: "templateType"
		},
		{
			title: LS("Actions"),
			dataIndex: "actions",
			render: (text: any, record: any) => {
				return (
					<ActionCell
						userAuthData={props.userAuthData}
						record={record}
					/>
				)
			}
		}
	];

	return (
		<div className="user__table">
			{!tableLoading ? <AntTable columns={columns} dataSource={filteredCanvasList} /> : <ComponentLoading />}
		</div>
	)
}

export default Table;