// WEB 425 Angular with TypeScript
// Contributors
// About Page

// Contributors:
// Richard Krasso
// Thomas James Schultz

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IBook } from '../book.interface';

// tells which css & html files to use
@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.css']
})

// export statement
export class BookDetailsDialogComponent implements OnInit {

  book: IBook;

  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    this.book = data.book;
  }

  ngOnInit(): void {
  }
}
