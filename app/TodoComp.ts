import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Todo } from './todoService';

@Component({
	selector: 'todo',
	template: `
		<li (click)="onDoneClick()" >
			<span *ngIf="!todo.completed" style="color: red;">{{todo.str}}</span>
			<span *ngIf="todo.completed" style="color: green;">{{todo.str}}</span>
		</li>
	`
})

export default class TodoComp {
	@Input() todo:Todo;
	@Output() onDone = new EventEmitter();
	onDoneClick(){
		this.onDone.emit(this.todo);
	}
}