import React from "react"

import Article from "../components/Article.js"

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
		const Articles = [
			"Some Articles",
			"Some Other Articles",
			"Some sdfsd dsArticles",
			"asdf sfads"
		].map((title, i) => <Article key={i} title={title} />);

		return (
			<div>
				<h1>Featured</h1>
				<div class="row">{Articles}</div>
			</div>
		);
	}
}