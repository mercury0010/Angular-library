import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  books: any;
  searcForm: FormGroup;
  r: any
  r2: any
  constructor(private http: HttpClient, private fb: FormBuilder, private libraryService: LibraryService, private route: Router) {

  }

  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      this.route.navigate(['/']);
      alert("Login First!")
    }
    this.showSearch()
    this.r = this.route.url

    this.r2 = this.r.toString().split("/", 3)
    console.log(this.r2[2].replaceAll("%20", " "))


  }
  showSearch(): void {
    this.searchShow().subscribe((data) => {

      if (data == 0) {
        alert('Search Item Not Found')
        this.route.navigate(['/dashboard'])

      } else {
        this.books = data;
        console.log(this.books)
      }
    }
    )
  }
  searchShow() {
    this.r = this.route.url

    this.r2 = this.r.toString().split("/", 3)
    console.log(this.r2[2].replaceAll("%20", " "))
    return this.http.get('http://127.0.0.1:8000/search/' + this.r2[2].replaceAll("%20", " "));
  }
}
