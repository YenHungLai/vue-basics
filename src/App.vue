<template>
	<div id="app">
		<!-- <Header />
		<AddTodo v-on:add-todo="addTodo" />
		<Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />-->
		<Test name="Jacob" />
	</div>
</template> 

<script>
/* eslint-disable */
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import Test from "./components/Test";

export default {
	name: "app",
	components: {
		Header,
		Todos,
		AddTodo,
		Test
	},
	data() {
		return {
			todos: []
		};
	},
	methods: {
		deleteTodo(id) {
			this.todos = this.todos.filter(todo => todo.id !== id);
		},
		addTodo(newTodo) {
			const { title, completed } = newTodo;
			fetch("https://jsonplaceholder.typicode.com/todos", {
				method: "POST",
				body: {
					title,
					completed
				}
			})
				.then(res => res.json())
				.then(data => {
					console.log(data);
					this.todos = [...this.todos, data];
				});

			this.todos = [...this.todos, newTodo];
		}
	},
	created() {
		// fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
		// 	.then(res => res.json())
		// 	.then(data => (this.todos = data));
	}
};
</script>

<style>
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
body {
	font-family: Arial, Helvetica, sans-serif;
	line-height: 1.4;
}
.btn {
	display: inline-block;
	border: none;
	background: #555;
	color: #fff;
	padding: 7px 20px;
	cursor: pointer;
}
.btn:hover {
	background: #666;
}
</style>
