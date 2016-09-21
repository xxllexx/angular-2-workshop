import { Component, Input, OnInit } from '@angular/core';

export class Section {
  constructor (
    public id: number,
    public type:number = 0,
    public question: string = '',
    public options: Array<string> = []
  ){}
}

@Component({
	selector: 'form-section',
	template: `
		<section>
			<div>
				<input type="text" placeholder="your text"/>
		  		<select>
		  			<option>Single Answer</option>
		  			<option>Multiple Answer</option>
		  			<option>Own Answer</option>
		  		</select>
			</div>
			<ul class="options">
				<li>
					<input type="radio" disabled/>
					<input type="text" placeholder="option text"/>
					<button>x</button>
				</li>
			</ul>
			<div>
				<a href="#">+ add option</a>
			</div>

		</section>
		<button>Remove</button>
	`
})

export default class FormSection{
	@Input()
	sectionSettings: Section
}