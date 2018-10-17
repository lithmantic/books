import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  // books = BOOKS;

  // selectedBook: Book;


  // constructor(private booksService: BooksService) { }

  ngOnInit() {
    // this.getBooks();
  }

  // onSelect(book: Book): void {
  //   this.selectedBook = book;
  // }

  // add(name: string): void {
  //   this.editBook = undefined;
  //   name = name.trim();
  //   if (!name) { return; }
  //   // The server will generate the id for this new bok
  //   const newBook: Book = { name } as Book;
  //   this.booksService.addBook(newBook)
  //     .subscribe(book => this.books.push(book));
  // }
  // this.booksService.addBook(newBook).subscribe(book => this.books.push(book));

  // delete(book: Book): void {
  //   this.books = this.books.filter(h => h !== book);
  //   this.booksService.deleteBook(book.id).subscribe();
  // }
  // this.booksService.deleteBook(book.id).subscribe();
  // this.booksService.deleteBook(book.id);

  // getBooks(): void {
  //   this.getBooks();
  // }

  // update() {
  //   if (this.editBook) {
  //     this.booksService.updateBook(this.editBook)
  //       .subscribe(book => {
  //         // replace the book in the books list with update from server
  //         const ix = book ? this.books.findIndex(h => h.id === book.id) : -1;
  //         if (ix > -1) { this.books[ix] = book; }
  //       });
  //     this.editBook = undefined;
  //   }
  // }
}
