import { Component, Input, OnInit } from '@angular/core';
import { Section } from '../dto/SectionDTO';

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