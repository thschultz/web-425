// WEB 425 Angular with TypeScript
// Contributors

// Contributors:
// Richard Krasso
// Thomas James Schultz -->

// import statement
import { Component, OnInit } from '@angular/core';

// tells which css and html files to use
@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})

// export statement
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor() {
    this.assignment = 'Exercise 6.3 - Layouts';
  }

  ngOnInit(): void {
  }

}
