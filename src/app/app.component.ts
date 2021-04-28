import { Component } from '@angular/core';
import { lorem } from 'faker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  enteredText = '';
  // assigning a new property for faker
  randomText = lorem.sentence();

  /* method 1 */
  onInput (value: string) {
    console.log(value);
    this.enteredText = value;
  }

  /*
  // Method 2
  solved = false;
  onInput(value: string){
    if(value === this.randomText){
      this.solved = true;
    }
  }
  */

  // passing a specific letter and comparing it to the other
  // and we will return a proper condition
  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }
    // if (enteredLetter === randomLetter) {
    //   return ('correct')
    // }
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
