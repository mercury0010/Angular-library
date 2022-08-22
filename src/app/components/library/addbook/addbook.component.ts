import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  addBookForm: FormGroup
  private image_url;
  selectedFile: File;
  imgFile: string;
  fileSource: File;
  constructor(private fb: FormBuilder, private libraryService: LibraryService, private route: Router) {
    this.addBookForm = this.fb.group({
      title: [null, Validators.required],
      author: [null, Validators.required],
      status: ['Active', Validators.required],
      location: [null, Validators.required],
      type: [null, Validators.required],
      image: [''],
      plot: [null, Validators.required],

    })
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      this.route.navigate(['/']);
    }


  }
  get f() {
    return this.addBookForm.controls;
  }
  addUserBook(data: any) {
    if (this.addBookForm.get('title')!.value == null) {

      alert("Some Fields are missing")
      window.location.reload();
    }
    else if (this.addBookForm.get('author')!.value == null) {

      alert("Some Fields are missing")
      window.location.reload();
    }
    else if (this.addBookForm.get('location')!.value == null) {

      alert("Some Fields are missing")
      window.location.reload();
    }
    else if (this.addBookForm.get('type')!.value == null) {

      alert("Some Fields are missing")
      window.location.reload();
    }
    else if (this.addBookForm.get('plot')!.value == null) {

      alert("Some Fields are missing")
      window.location.reload();
    } else {
      this.libraryService.addBook(this.addBookForm.value).subscribe(
        (data) => { alert("Succesfully Added Book"); this.route.navigate(['/profile']); }
      )
    }

  }


  onSelectFiled(event: any) {

    this.selectedFile = event.target.files[0];
    console.log(event)
  }

}
