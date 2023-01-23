// WEB 425 Angular with TypeScript
// Contributors:
// Richard Krasso
// Thomas James Schultz

// import component from angular core
import { Component } from '@angular/core';

// declare the component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// export the component class
export class AppComponent {
  // variables to pass to the whole app
  assignment: string = `Assignment 3.3 - Guarding Routes`;
}
