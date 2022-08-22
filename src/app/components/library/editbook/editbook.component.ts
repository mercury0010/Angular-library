import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {
  r: any
  r2: any
  booksdata: any
  editBookForm: FormGroup

  constructor(private http: HttpClient, private fb: FormBuilder, private route: Router) {
    this.editBookForm = this.fb.group({
      title: [null, Validators.required],
      author: [null, Validators.required],
      status: ['Active', Validators.required],
      location: [null, Validators.required],
      type: [null, Validators.required],
      plot: [null, Validators.required],

    })
  }

  ngOnInit(): void {
    this.FilterEditUserBook()
    if (localStorage.getItem('token') == null) {
      this.route.navigate(['/']);
      alert("Login First!")
    }
  }
  EditUserBook(data: any) {
    if (this.editBookForm.get('title')!.value == null) {

      alert("Some Fields are missing")
      window.location.reload();
    }
    else if (this.editBookForm.get('author')!.value == null) {

      alert("Some Fields are missing")
      window.location.reload();
    }
    else if (this.editBookForm.get('location')!.value == null) {

      alert("Some Fields are missing")
      window.location.reload();
    }
    else if (this.editBookForm.get('type')!.value == null) {

      alert("Some Fields are missing")
      window.location.reload();
    }
    else if (this.editBookForm.get('plot')!.value == null) {

      alert("Some Fields are missing")
      window.location.reload();
    }
    else {
      this.geteditBooks(this.editBookForm.value).subscribe((data) => { alert("Succesfully Edited the Book"); this.route.navigate(['/profile']); })
    }

  }
  FilterEditUserBook(): void {
    this.getBooks().subscribe((data) => {
      this.booksdata = data;
      console.log(this.booksdata)
    })
  }


  get f() {
    return this.editBookForm.controls;
  }
  getBooks() {
    this.r = this.route.url
    this.r2 = this.r.toString().split("/", 4)
    console.log(this.r2[3])
    return this.http.get('http://127.0.0.1:8000/filtereditbook/' + this.r2[3]);

  }
  geteditBooks(data: any) {
    this.r = this.route.url
    this.r2 = this.r.toString().split("/", 4)
    console.log(this.r2[3])
    return this.http.put('http://127.0.0.1:8000/editbook/' + this.r2[3], data);

  }

} 
