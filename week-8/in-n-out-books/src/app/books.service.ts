// WEB 425 Angular with TypeScript

// Contributors:
// Richard Krasso
// Thomas James Schultz


import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';


import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  isbns: string[] = [
    '0345339681',
    '0261103571',
    '9780593099322',
    '9780261102361',
    '9780261102378',
    '9780590302715',
    '9780316769532',
    '9780743273565',
    '9780590405959',
  ];

  constructor(private http: HttpClient) { }

  // This function will return the books array
  getBooks() {
    let params = new HttpParams();
    params = params.append('bibkeys', this.isbns.join(',')); // `ISBN:${this.isbn.join(',')}`
    params = params.append('format', 'json');
    params = params.append('jscmd', 'details');

    return this.http.get('https://openlibrary.org/api/books', {
      params: params,
    });
  }
}
