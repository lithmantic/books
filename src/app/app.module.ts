import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookBorrowComponent } from './book-borrow/book-borrow.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookReturnComponent } from './book-return/book-return.component';
// import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailComponent,
    BookBorrowComponent,
    BookDeleteComponent,
    BookReturnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    // HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
