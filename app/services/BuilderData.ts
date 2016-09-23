import { Injectable } from '@angular/core';
import { Section, Option } from '../dto/SectionDTO'

const sectionsMock = [{
  id: 0,
  type: 0,
  question: '',
  options: []
}]

@Injectable()
export class BuilderDataService {
  sections:Section[] = [];
  nextId:number = 0;
  loaded = false;
  getSections(): Section[] {
    if (localStorage.getItem('formData') && !this.loaded) {
      let sections = JSON.parse(localStorage.getItem('formData'));
      this.sections = sections.map(s => 
        new Section(
          +s.id,
          s.type,
          s.question,
          s.options.map(o => new Option(o.id, o.title))
        )
      )
    }
    this.loaded = true;
    
    return this.sections;
  }
  addEmptySection(): void{
    this.addSection({
      type: 0,
      question: '',
      options: []
    });
  }
  addSection({type, question, options}): void{
    this.sections = [
      ...this.sections,
      new Section(
        this.nextId++,
        type,
        question,
        options
      )
    ];
  }
  removeSection(_id):void {
    this.sections = this.sections.filter(({id}) => id !== _id);
  }
}