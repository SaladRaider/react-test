import React from "react"

export default class Archives extends React.Component  {
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
		const { article } = this.props.params;
		const { query } = this.props.location;
		const { date } = query;
		return (
			<div>
				<h1>Archives ({article}) on {date}</h1>
			</div>
		);
	}
}