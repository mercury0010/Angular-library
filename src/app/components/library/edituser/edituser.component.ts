import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  editForm: FormGroup
  constructor(private fb: FormBuilder, private libraryService: LibraryService, private route: Router) {
    this.editForm = this.fb.group({
      first_name: [null, Validators.required],
      last_name: [null, Validators.required],

    })
  }
  get f() {
    return this.editForm.controls;
  }
  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      this.route.navigate(['/']);
      alert("Login First!")
    }
  }

  editUser(data: any) {

    this.libraryService.editUser(this.editForm.value).subscribe(
      data => {
        alert("Successfully Edited Account"), this.route.navigate(['profile'])
      },
    )
  }
}

