import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Section } from '../dto/SectionDTO';

@Component({
	selector: 'form-section',
	template: `
		<section>
			<div>
				  <input type="text" placeholder="your text" [(ngModel)]="sectionSettings.question"/>
		  		<select [(ngModel)]="sectionSettings.type">
		  			<option *ngFor="let type of types" [value]="type.id">{{type.text}}</option>
		  		</select>
          <single *ngIf="sectionSettings.type == '0'"
            [sectionId]="sectionSettings.id"
            [options]="sectionSettings.options"></single>
          <multiple *ngIf="sectionSettings.type == '1'"
            [sectionId]="sectionSettings.id"
            [options]="sectionSettings.options"></multiple>
          <div class="own" *ngIf="sectionSettings.type == '2'">
            <textarea placeholder="Type here"></textarea>
          </div>
			</div>
		</section>
		<button (click)="removeMe()">Remove</button>
	`
})

export default class FormSection{
	@Input() sectionSettings: Section;
  @Output() remove = new EventEmitter();
	private types = [
    {id: 0, text: 'Single Answer'},
    {id: 1, text: 'Multiple Answers'},
    {id: 2, text: 'Own Answer'}
  ];
  removeMe(){
    this.remove.emit(this.sectionSettings.id);
  }
}