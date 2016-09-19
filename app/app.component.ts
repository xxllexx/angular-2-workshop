import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  	<h1>Ng Forms Builder</h1>
  	<div class="wrapper">
  		<input type="text" placeholder="your text"/>
  		<select>
  			<option>Test</option>
  		</select>
  		<input type="radio" />
  		<input type="checkbox" />
  		<textarea></textarea>
  		<button>+ add option</button>
  	</div>
  `
})

export class AppComponent {
	
}