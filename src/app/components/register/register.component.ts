import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { isNumber, result } from 'lodash';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  angForm: FormGroup
  isSubmitBtnDisabled: boolean = false;


  constructor(private fb: FormBuilder, private userService: UserService, private route: Router) {
    this.angForm = this.fb.group({
      email: [null, Validators.required],
      first_name: [null, Validators.required],
      last_name: [null, Validators.required],
      password: [null, Validators.required],
      password2: [null, Validators.required],
    })


  }
  ngOnInit(): void {

  }
  registerError() {

  }
  get f() {
    return this.angForm.controls;
  }
  register(data: any) {

    this.userService.regUser(this.angForm.value).subscribe(
      /**next: (data) => { console.log('succes'); }**/
      /**this.route.navigate()**/
      data => {
        if (this.angForm.get('password')?.value != this.angForm.get('password2')?.value) {
          alert('Password is not the same. Please retype again');
          this.route.navigate(['/login']);
        } else if (this.angForm.get('password')?.value == null) {
          alert('Some Fields are missing');
          this.route.navigate(['/login']);
        } else if (this.angForm.get('password2')?.value == null) {
          alert('Some Fields are missing');
          this.route.navigate(['/login']);
        } else if (this.angForm.get('email')?.value == null) {
          alert('Some Fields are missing');
          this.route.navigate(['/login']);
        } else if (this.angForm.get('first_name')?.value == null) {
          alert('Some Fields are missing');
          this.route.navigate(['/login']);
        } else if (this.angForm.get('last_name')?.value == null) {
          alert('Some Fields are missing');
          this.route.navigate(['/login']);
        }
        else {
          alert('Account Created Successfully!!'),
            this.route.navigate(['/']);
        }

      },
      error => { }
    )
  }

}
