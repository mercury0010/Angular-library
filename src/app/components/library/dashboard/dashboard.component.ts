import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryService } from 'src/app/services/library.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  books: any;
  constructor(private libraryService: LibraryService, private userService: UserService, private route: Router) { }

  ngOnInit(): void {
    this.getAllBooks()
    if (localStorage.getItem('token') == null) {
      this.route.navigate(['/']);
      alert("Login First!")
    }
  }

  getAllBooks(): void {
    this.libraryService.getBooks().subscribe((data) => {
      this.books = data;
      console.log(this.books)
    })
  }

}
