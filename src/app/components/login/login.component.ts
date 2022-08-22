import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(private fb: FormBuilder, private userService: UserService, private route: Router) {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],

    })
  }
  get f() {
    return this.loginForm.controls;
  }
  ngOnInit(): void {
  }
  login(data: any) {


    if (this.loginForm.get('username')?.value == null) {
      alert('username missing!');
    } else if (this.loginForm.get('password')?.value == null) {
      alert('Password missing!');
    } else {
      this.userService.logUser(this.loginForm.value).subscribe(
        /**next: (data) => { console.log('succes'); }**/
        /**this.route.navigate()**/
        data => {

          (<any>window).localStorage['token'] = JSON.stringify(data)

        },

      )

      this.userService.logInUser(this.loginForm.value).subscribe(
        /**next: (data) => { console.log('succes'); }**/
        /**this.route.navigate()**/
        data => {
          console.log(data), this.route.navigate(['dashboard'])


        },
        error => { alert('Credentials Not Found!'); }
      )
    }






  }


}
