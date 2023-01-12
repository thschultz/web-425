// WEB 425 Angular with TypeScript
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
  //isLoggedIn set to true to display information on the front page
  isLoggedIn: Boolean = true;
  //assignment variable
  assignment = 'Exercise 2.3 Data Binding';
}
