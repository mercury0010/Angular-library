import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LibraryService } from 'src/app/services/library.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searcForm: FormGroup
  values = '';
  constructor(private userService: UserService, private route: Router, private fb: FormBuilder, private libraryService: LibraryService,) {
    this.searcForm = this.fb.group({
      query: [null, Validators.required],
    })
  }

  ngOnInit(): void {
  }
  logOut() {
    this.userService.logoutUser().subscribe(
      success => {
        this.route.navigate(['/']),
          (<any>window).localStorage.clear();
      })
  }



  onKey(event: any) { // without type info
    this.values = event.target.value;
  }
}
