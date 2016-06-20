import { EventEmitter } from "events";

import dispatcher from "../dispatcher.js";

class TodoStore extends EventEmitter {
	constructor() {
		super();
		this.todos = [
		{
			id: 123432432,
			text: "Go Shopping",
			complete: false
		},
		{
			id: 989320843,
			text: "Pay Water Bills",
			complete: false
		}
		];
	}

	createTodo(text) {
		const id = Date.now();
		this.todos.push({
			id,
			text,
			complete: false
		});

		this.emit("change");
	}

	getAll() {
		return this.todos;
	}

	handleActions(action) {

		switch(action.type) {
			case "CREATE_TODO": {
				this.createTodo(action.text);
			}
		}

		console.log("TodoStore recieved an action", action);
	}
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher;
export default todoStore;