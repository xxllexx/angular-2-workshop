import {Component, Input} from '@angular/core';
import { Option } from '../dto/SectionDTO';


@Component({
  selector: 'multiple',
  template: `
    <div>
      <ul class="options">
        <li *ngFor="let option of options; let i = index;">
          <input type="checkbox"/>
          <input type="text" placeholder="option text" [(ngModel)]="option.title"/>
          <button (click)="removeOption(i)">x</button>
        </li>
      </ul>
      <div>
        <a href="#" (click)="addOption()">+ add option</a>
      </div>
    </div>
  `
})
export default class Multiple {
  @Input() options:Option[] = [new Option(0,`Option 1`)];
  @Input() sectionId;
  addOption():void {
    this.options.push(
      new Option((this.options.length + 1),`Option ${this.options.length + 1}`)
    )
  }
  removeOption(i):void {
   this.options.splice(i, 1);
  }
}
