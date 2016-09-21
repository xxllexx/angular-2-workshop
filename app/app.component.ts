import { Component, OnInit } from '@angular/core';
import { BuilderDataService } from './services/BuilderData';

@Component({
  selector: 'my-app',
  template: `
  	<h1>Ng Forms Builder</h1>
  	<div class="wrapper">
  		<div class="sections">
  			<form-section *ngFor="let section of data" [sectionSettings]="section"></form-section>
  		</div> 
  		<button (click)="addSection()">+</button>
  	</div>
  `,
  providers: [BuilderDataService]
})

export class AppComponent {
	data;
	constructor(private builderService: BuilderDataService){}
	ngOnInit():void {
		this.getBuilderData();
	}
	getBuilderData():void {
		this.data = this.builderService.getSections();
	}
	addSection():void {
		this.builderService.addEmptySection();
	}
}