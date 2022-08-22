import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-userborrowbook',
  templateUrl: './userborrowbook.component.html',
  styleUrls: ['./userborrowbook.component.css']
})
export class UserborrowbookComponent implements OnInit {
  bookborrowed: any

  booksdata: any

  constructor(private fb: FormBuilder, private http: HttpClient, private libraryService: LibraryService, private route: Router) {

  }

  ngOnInit(): void {
    this.getAllBook()
    if (localStorage.getItem('token') == null) {
      this.route.navigate(['/']);
      alert("Login First!")
    }
  }
  getAllBook(): void {
    this.libraryService.getUserBorrowBook().subscribe((data) => {
      this.bookborrowed = data;
      console.log(this.bookborrowed)
    })
  }


}
