import {Component, Input} from '@angular/core';

@Component({
  selector: 'multiple',
  template: `
    <div>
      <ul class="options">
        <li *ngFor="let option of options">
          <input type="checkbox"/>
          <input type="text" placeholder="option text" [value]="option"/>
          <button>x</button>
        </li>
      </ul>
      <div>
        <a href="#" (click)="addOption()">+ add option</a>
      </div>
    </div>
  `
})
export default class Multiple {
  @Input()
  options = [];
  addOption() {
    let nr = this.options.length + 1;
    this.options.push(`Option ${nr}`);
  }
}
