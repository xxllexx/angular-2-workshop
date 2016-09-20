import { Injectable } from '@angular/core';
import { Section } from '../dto/SectionDTO'


const sections = [{
	id: 0,
	type: 0,
	question: 'Section 1',
	options: ['Option 1', 'Option 2', 'Option 3']
}, {
	id: 1,
	type: 0,
	question: 'Section 2',
	options: ['Option 1', 'Option 2', 'Option 3']
}, {
	id: 2,
	type: 0,
	question: 'Section 3',
	options: ['Option 1', 'Option 2', 'Option 3']
}, {
	id: 2,
	type: 0,
	question: 'Section 4',
	options: ['Option 1', 'Option 2', 'Option 3']
}];


@Injectable()
export class BuilderDataService {
	sections:Section[] = [];
	nextId:number = 0;
	getSections(): Section[] {
		return sections
	}
	addEmptySection(): void{
		this.addSection({
			type: 0,
			question: '',
			options: []
		})
	}
	addSection({type, question, options}): void{
		this.sections.push(new Section(
			this.nextId++,
			type,
			question,
			options
		));
	}
	removeSection(_id): void{
		this.sections = this.sections.filter(({id}) => id !== _id);
	}
}