import React from "react";
import { PlusOutlined } from "@ant-design/icons"
import "./style.scss";

const PlusButton = (props: {
	text: string,
	handleClick: Function
}) => {
	const { text, handleClick } = props;
	return (
		<button className="plusButton" onClick={(e: any) => handleClick(e)}>
			<p><PlusOutlined /></p>
			<span>{text}</span>
		</button>
	)
}

export default PlusButton;