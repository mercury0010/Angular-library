import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-borrowbook',
  templateUrl: './borrowbook.component.html',
  styleUrls: ['./borrowbook.component.css']
})
export class BorrowbookComponent implements OnInit {
  r: any
  r2: any
  booksdata: any
  borrowBookForm: FormGroup
  borrowBookStatusForm: FormGroup
  isSubmitBtnDisabled: boolean = false;
  date;
  constructor(private http: HttpClient, private fb: FormBuilder, private route: Router) {
    this.borrowBookForm = this.fb.group({
      returnedDate: [null, Validators.required],
    })
    this.borrowBookStatusForm = this.fb.group({
      status: ['Borrowed', Validators.required],
    })
  }

  ngOnInit(): void {
    this.userBorrowBook()
    this.disableButton()
    this.r = this.route.url
    this.r2 = this.r.toString().split("/", 5)
    if (localStorage.getItem('token') == null) {
      this.route.navigate(['/']);
      alert("Login First!")
    }
    this.date = new Date().toISOString().slice(0, 10);
  }
  disableButton() {
    this.r = this.route.url
    this.r2 = this.r.toString().split("/", 5)
    console.log(this.r2[4])
    if (this.r2[4] == 'Active') {

      this.isSubmitBtnDisabled = false;
    } else {

      this.isSubmitBtnDisabled = true;
    }
  }
  userBorrowBook(): void {
    this.getBorrowBook().subscribe((data) => {
      this.booksdata = data;
      console.log(this.booksdata)
    })
  }
  userBorrow(data: any) {
    if (this.borrowBookForm.get('returnedDate')?.value != null) {
      this.borrowBook(this.borrowBookForm.value).subscribe((data) => {

        console.log(data)
      })
    } else {
      alert('Some Fields are missing');
    }
  }
  bookStatus() {
    if (this.borrowBookForm.get('returnedDate')?.value != null) {
      this.borrowBookStatus(this.borrowBookStatusForm.value).subscribe((data) => {
        alert("Book successfully borrowed!")
        this.route.navigate(['/profile']);
        console.log(data)


      })
    } else {

    }
  }

  getBorrowBook() {
    this.r = this.route.url
    this.r2 = this.r.toString().split("/", 4)
    console.log(this.r2[3])
    return this.http.get('http://127.0.0.1:8000/showborrowbook/' + this.r2[3]);

  }
  borrowBook(data: any) {
    this.r = this.route.url
    this.r2 = this.r.toString().split("/", 4)
    console.log(this.r2[3])
    return this.http.post('http://127.0.0.1:8000/borrowbook/' + this.r2[3], data);

  }
  borrowBookStatus(data: any) {
    this.r = this.route.url
    this.r2 = this.r.toString().split("/", 4)
    console.log(this.r2[3])
    return this.http.put('http://127.0.0.1:8000/updateborrowbook/' + this.r2[3], data);

  }

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
