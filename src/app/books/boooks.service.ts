import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Book } from './book';
import { BooksService } from '../books.service';


@Injectable()
export class BooksService {
  constructor(
    private http: HttpClient
  ) { }


  // /** POST: add a new book to the database */
  // addBook (book: Book): Observable<Book> {
  //   return this.http.post<Book>(this.booksUrl, book)
  //     .pipe(
  //       catchError(this.handleError('addBook', book))
  //     );
  // }
  /** DELETE: delete the book from the server */
  deleteBook (id: number): Observable<{}> {
    const url = `${this.booksUrl}/${id}`; // DELETE api/books/42
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError('deleteBook'))
      );
  }
  /** GET books from the server */
  getBooks (): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl)
      .pipe(
        catchError(this.handleError('getBooks', []))
      );
  }
  // /** PUT: update the book on the server. Returns the updated book upon success. */
  // updateBook (book: Book): Observable<Book> {
  //   return this.http.put<Book>(this.booksUrl, book)
  //     .pipe(
  //       catchError(this.handleError('updateBook', book))
  //     );
  // }
}

