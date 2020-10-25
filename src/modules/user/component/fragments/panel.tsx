import React from "react";

import { LS } from "../../../../utils/helpers";
import PlusButton from "../../../../assets/ui/plusButton/plusButton";
import { ICanvasList } from "../../interfaces";

/** @description Panel with actions like creating a canvas. */
const Panel = (props: {
	setCreateCanvasModalState: Function
	canvasList: Array<ICanvasList>
	setFilteredCanvasList: Function
}) => {
	const { setCreateCanvasModalState, canvasList, setFilteredCanvasList } = props;
	return (
		<div className="user__panel">
			<div className="user__panel__search">
				<input type="text" onChange={(e: any) => {
				const list: any = canvasList.filter((item: any) => {
					if(item.title.includes(e.target.value)) return item;
				});
				setFilteredCanvasList(list);
			}} placeholder="Search"/>
			</div>
			<div className="user__panel__create">
				<PlusButton text={LS("Create")} handleClick={() => setCreateCanvasModalState(true)} />
			</div>
		</div>
	)
}

export default Panel;