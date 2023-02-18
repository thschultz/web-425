// WEB 425 Angular with TypeScript
// Contributors

// Contributors:
// Richard Krasso
// Thomas James Schultz

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.scss']
})
export class GpaComponent implements OnInit {

  @Input() gpaTotal: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
