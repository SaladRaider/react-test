import React from "react"

import Footer from "../components/Footer.js"
import Header from "../components/Header.js"

export default class Featured extends React.Component  {
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
				<h1>Featured</h1>
				<Footer />
			</div>
		);
	}
}