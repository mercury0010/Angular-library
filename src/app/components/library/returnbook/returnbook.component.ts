import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-returnbook',
  templateUrl: './returnbook.component.html',
  styleUrls: ['./returnbook.component.css']
})
export class ReturnbookComponent implements OnInit {
  borrowBookStatusForm: FormGroup
  r: any
  r2: any

  constructor(private fb: FormBuilder, private http: HttpClient, private libraryService: LibraryService, private route: Router) {
    this.borrowBookStatusForm = this.fb.group({
      status: ['Active', Validators.required],
    })
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      this.route.navigate(['/']);
      alert("Login First!")
    }
    this.r = this.route.url
    this.r2 = this.r.toString().split("/", 5)
    console.log(this.r2[3].replaceAll("%20", " "))
    console.log(this.r2[4])


  }
  bookStatus() {
    this.borrowBookStatus(this.borrowBookStatusForm.value).subscribe((data) => {
      alert("Book Returned Succesfully")
      this.route.navigate(['/profile']);

    }),
      this.deleteborrowBook().subscribe((data) => {

        console.log(data)
      })
  }

  borrowBookStatus(data: any) {
    this.r = this.route.url
    this.r2 = this.r.toString().split("/", 4)
    console.log(this.r2[3])
    return this.http.put('http://127.0.0.1:8000/returnborrowbook/' + this.r2[3].replaceAll("%20", " "), data);
  }
  deleteborrowBook() {
    this.r = this.route.url
    this.r2 = this.r.toString().split("/", 5)

    return this.http.delete('http://127.0.0.1:8000/deleteborrowbook/' + this.r2[4]);
  }
}
