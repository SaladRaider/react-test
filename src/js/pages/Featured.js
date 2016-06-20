import React from "react";
import { withRouter } from "react-router";

import Todo from "../components/Todo.js";
import * as TodoActions from "../actions/TodoActions.js";
import TodoStore from "../stores/TodoStore.js";

export default withRouter(class Featured extends React.Component  {
	constructor() {
		super();
		this.getTodos = this.getTodos.bind(this);
		this.state = {
			todos: TodoStore.getAll()
		};
	}

	componentWillMount() {
		TodoStore.on("change", this.getTodos);
	}

	componentWillUnmount() {
		TodoStore.removeListener("change", this.getTodos);
	}

	createTodo() {
		TodoActions.createTodo(document.getElementById("todoTextbox").value);
	}

	getTodos() {
		this.setState({
			todos: TodoStore.getAll()
		});
	}

	render()  {
		
		const { todos } = this.state;

		const TodoComponents = todos.map((todo) => {
			return <Todo key={todo.id} {...todo} />
		});

		return (
			<div>
				<button onClick={this.createTodo.bind(this)}>Create!!</button>
				<input id="todoTextbox" />
				<h1>Todos</h1>
				<div class="row">
				<div class="col-xs-12">{TodoComponents}</div>
				</div>
			</div>
		);
	}
});