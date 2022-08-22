import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {


  books = 'http://127.0.0.1:8000/book'
  profile = 'http://127.0.0.1:8000/profile'
  edit = 'http://127.0.0.1:8000/edit'
  addB = 'http://127.0.0.1:8000/Addbook'
  getB = 'http://127.0.0.1:8000/getbook'
  getBorrowB = 'http://127.0.0.1:8000/get_borrow_book'
  searchUB = 'http://127.0.0.1:8000/search'
  constructor(private http: HttpClient) { }


  getToken() {
    // fetch the generated token from the storage
    const d = (<any>window).localStorage['token'];
    console.log(JSON.parse(d))
    if (!d) return null;
    return JSON.parse(d);
  }

  getBooks() { return this.http.get(this.books); }

  getProfile() {

    return this.http.get(this.profile);

  }
  editUser(data: any) {
    return this.http.put(this.edit, data);
  }

  addBook(data: any) {
    return this.http.post(this.addB, data);
  }
  getBook() {
    return this.http.get(this.getB);
  }
  getUserBorrowBook() {
    return this.http.get(this.getBorrowB);
  }




}
