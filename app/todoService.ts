import { Injectable } from '@angular/core';

export class Todo {
	constructor(public str:string, public completed: boolean = false){}
	toggleCompleted(){
		this.completed = !this.completed;
	}
}

@Injectable()
export class TodoService {
	todos: Todo[] = [];
	addTodo (str) {
		this.todos.push(new Todo(str));
	}
	getTodos(){
		return this.todos;
	}
}