// WEB 425 Angular with TypeScript
// Contributors:
// Richard Krasso
// Thomas James Schultz

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

// create the component
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
// export the class
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;
  txtSearchControl = new FormControl('');

  // inject the composer service
  constructor(private composerService: ComposerService) {
    // get the composers from the composer service
    this.composers = this.composerService.getComposers();

    // subscribe to the value changes in the search text box
    // had to add the or '' to the val parameter to prevent an error
    this.txtSearchControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe((val) => this.filterComposers(val || ''));

  }

  ngOnInit(): void { }

  // filter composers by name
  filterComposers(name: string) {
    alert(name);
  }
}
