import React from "react"
import { Link, withRouter } from "react-router";

import Footer from "../components/Footer.js"
import Header from "../components/Header.js"

export default withRouter(class Layout extends React.Component  {
	constructor() {
		super();
		this.state = {
			title: "Welcome"
		};
	}

	changeTitle(title) {
		this.setState({title});
	}

	navigate() {
		this.props.router.push("/");
	}

	render()  {
		return (
			<div>
				<h1>Layout.com</h1>
				{this.props.children}
				<Link to="archives"><button class="btn btn-success">Archives</button></Link>
				<Link to="settings"><button class="btn btn-danger">Settings</button></Link>
				<button onClick={this.navigate.bind(this)}>Featured</button>
				<Footer />
			</div>
		);
	}
});