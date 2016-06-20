import React from "react"
import { withRouter } from "react-router";

import Footer from "../components/Footer.js"
import Header from "../components/Header.js"

export default withRouter(class Settings extends React.Component  {
	constructor() {
		super();
		this.state = {
			title: "Welcome"
		};
	}

	changeTitle(title) {
		this.setState({title});
	}

	render()  {
		return (
			<div>
				<h1>Settings</h1>
			</div>
		);
	}
});