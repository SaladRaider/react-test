import React from "react"

export default class Article extends React.Component  {
	render()  {
		const { title } = this.props;

		return (
			<div class="col-xs-12 col-sm-6 col-md-4">
				<h2>{title}</h2>
				<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.		
				</p>
				<a class="btn btn-default" href="#">More Info</a>
			</div>
		);
	}
}