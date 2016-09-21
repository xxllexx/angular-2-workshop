import {Component, Input} from '@angular/core';

@Component({
  selector: 'single',
  template: `
    <div>
      <ul class="options">
        <li *ngFor="let option of options">
          <input type="radio"/>
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
export default class Single {
  @Input()
  options = [];
  addOption() {
    let nr = this.options.length + 1;
    this.options.push(`Option ${nr}`);
  }
}
