import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { LibraryService } from 'src/app/services/library.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;
  constructor(private libraryService: LibraryService, private userService: UserService, private route: Router) { }

  ngOnInit(): void {
    this.getProfile()
    if (localStorage.getItem('token') == null) {
      this.route.navigate(['/']);
      alert("Login First!")
    }
  }
  getProfile(): void {
    this.libraryService.getProfile().subscribe((data) => {
      this.profile = data;
      console.log(data)
    })
  }
}
