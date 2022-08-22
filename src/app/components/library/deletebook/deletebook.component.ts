import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletebook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./deletebook.component.css']
})
export class DeletebookComponent implements OnInit {
  r: any
  r2: any
  booksdata: any
  constructor(private http: HttpClient, private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      this.route.navigate(['/']);
      alert("Login First!")
    }
  }
  DeleteUserBook(): void {
    this.delBooks().subscribe((data) => { this.route.navigate(['/profile']); })
  }
  delBooks() {
    this.r = this.route.url
    this.r2 = this.r.toString().split("/", 4)
    console.log(this.r2[3])
    return this.http.delete('http://127.0.0.1:8000/deletebook/' + this.r2[3]);

  }
}
