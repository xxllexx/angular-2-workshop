import { Component } from '@angular/core';
import { TodoService } from './todoService';

@Component({
  selector: 'my-app',
  template: `
  	<h1>Ng Forms Builder!!!!</h1>
  	<div><input type="text" #box (keyup.enter)="add(box.value); box.value=''"/></div>
  	<ul>

  		<todo *ngFor="let todo of getTodos()" [todo]="todo" (onDone)="toggleCompleted($event)"></todo>
  	</ul>
  `,
  providers: [TodoService]
})

export class AppComponent {
	constructor(private todos: TodoService){}
	getTodos(){
		return this.todos.getTodos();
	}
	add(val){
		this.todos.addTodo(val);
	}
	toggleCompleted(todo){
		todo.toggleCompleted();
	}
}