// WEB 425 Angular with TypeScript
// Contributors
// About Page

// Contributors:
// Richard Krasso
// Thomas James Schultz


import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';


// injectable
@Injectable({
  providedIn: 'root'
})

// export statement
export class BooksService {

  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '123456',
        title: 'The Hobbit',
        description: 'Unlikely hero, Bilbo Baggins, goes on a unexpected journey when a wizard asks him to join with a band of dwarves to help take back their precious mountain.',
        numOfPages: 120,
        authors: ['JRR Tolkien']
      },
      {
        isbn: '123457',
        title: 'Enders Game',
        description: "Ender is a gifted child and is recruited by the military to train for an upcoming war.",
        numOfPages: 155,
        authors: ['Orson Scott Card']
      },
      {
        isbn: '123458',
        title: 'Lord of the Rings',
        description: "Frodo Baggins is given the task to destroy a powerful ring that could end Middle Earth.",
        numOfPages: 550,
        authors: ['JRR Tolkien']
      },
      {
        isbn: '123459',
        title: 'The Shining',
        description: "A family must take care of a hotel during the harsh winter season.",
        numOfPages: 180,
        authors: ['Stephen King']
      },
      {
        isbn: '123460',
        title: 'Moby Dick',
        description: "Epic journey of a crew hunting a giant white sperm whale",
        numOfPages: 130,
        authors: ['Herman Melvile']
      }
    ]
  }

  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
  }
}
