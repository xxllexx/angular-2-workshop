import { Injectable } from '@angular/core';
import { Section } from '../dto/SectionDTO'

@Injectable()
export class BuilderDataService {
	sections:Section[] = [];
	nextId:number = 0;
	getSections(): Section[] {
		return this.sections
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