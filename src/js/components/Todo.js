import React from "react"

export default class Todo extends React.Component  {
	render()  {

		const { text, complete } = this.props;
		const glyfClass = (complete) ? "glyphicon-ok" : "glyphicon-remove";

		return (
			<li>{text} <span class={"glyphicon " + glyfClass}></span></li>
		);
	}
}