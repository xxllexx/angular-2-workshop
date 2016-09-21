import { Component, Input, OnInit } from '@angular/core';
import { Section } from '../dto/SectionDTO';

@Component({
	selector: 'form-section',
	template: `
		<section>
			<div>
				  <input type="text" placeholder="your text"/>
		  		<select>
		  			<option *ngFor="let type of types" [value]="type.id">{{type.text}}</option>
		  		</select>
          <single [options]="sectionSettings.options"></single>
          <multiple [options]="sectionSettings.options"></multiple>
          <div>
            <textarea placeholder="Type here"></textarea>
          </div>
			</div>
		</section>
		<button>Remove</button>
	`
})

export default class FormSection{
	@Input()
	sectionSettings: Section;
	private types = [
    {id: '0', text: 'Single Answer'},
    {id: '1', text: 'Multiple Answers'},
    {id: '2', text: 'Own Answer'}
  ];
}