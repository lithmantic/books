import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
import { map, filter, switchMap } from 'rxjs/operators';
// import { Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';

import { BooksApiModel } from '../models/book-api/bookApi';
@Injectable()
export class BooksService {
  constructor(private http: HttpClient) {
  }

  public getApis() {
    return this.http.get('api/Book/Get').map(res => {
      return res as BooksApiModel[]
    });
  }


  public extract(url: string) {
    if (!url.endsWith('/')) {
      url = url + '/';
    }
    url = url + 'api/meta';
    return this.http.get('proxy', {params: {url}}).map(res => res as BooksApiModel);
  }
}
//   public saveApi(model: BooksApiModel) {
//     return this.http.post('api/Book/Get', model || {});
//   }
//
//   public deleteApis(ids: number[]) {
//     return this.http.post('api/Book/Get', ids);
//   }
// }
  /** POST: add a new book to the database */
  // addBook (book: Book): Observable<Book> {
  //   return this.http.post<Book>(this.booksUrl, book)
  //     .pipe(
  //       catchError(this.handleError('addBook', book))
  //     );
  // }
  /** DELETE: delete the book from the server */
  // deleteBook (id: number): Observable<{}> {
  //   const url = `${this.booksUrl}/${id}`; // DELETE api/books/42
  //   return this.http.delete(url)
  //     .pipe(
  //       catchError(this.handleError('deleteBook'))
  //     );
  // }
  /** GET books from the server */
  // getBooks (): Observable<Book[]> {
  //   return this.http.get<Book[]>(this.booksUrl)
  //     .pipe(
  //       catchError(this.handleError('getBooks', []))
  //     );
  // }
  // public getBooks() {
  //   return this.http.get('api/Book/Get').map(res => { return res as BooksApiModel[] });
  // }
  /** PUT: update the book on the server. Returns the updated book upon success. */
  // updateBook (book: Book): Observable<Book> {
  //   return this.http.put<Book>(this.booksUrl, book)
  //     .pipe(
  //       catchError(this.handleError('updateBook', book))
  //     );
  // }
// }
