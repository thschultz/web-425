// WEB 425 Angular with TypeScript
// Contributors
// About Page

// Contributors:
// Richard Krasso
// Thomas James Schultz

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = "Exercise 6.2 Input/Output Properties Part 1";
  }
}
