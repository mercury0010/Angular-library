import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-ownedbook',
  templateUrl: './ownedbook.component.html',
  styleUrls: ['./ownedbook.component.css']
})
export class OwnedbookComponent implements OnInit {
  book: any;
  constructor(private libraryService: LibraryService, private route: Router) {

  }

  ngOnInit(): void {
    this.getAllBook()
    if (localStorage.getItem('token') == null) {
      this.route.navigate(['/']);
      alert("Login First!")
    }
  }
  getAllBook(): void {
    this.libraryService.getBook().subscribe((data) => {
      this.book = data;
      console.log(this.book)
    })
  }
}
