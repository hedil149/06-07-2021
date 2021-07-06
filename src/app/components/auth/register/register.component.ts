import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {AuthService} from '../../../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../styles.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  url: string | ArrayBuffer;

  constructor(private formBuilder: FormBuilder, private router: Router, private _snackBar: MatSnackBar,private authservice:AuthService) { }


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],

      contact: ['', Validators.required],
      CIN: ['', Validators.required],
      User_Name: ['', Validators.required],
      url: ['', Validators.required],

    });
  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }

onSubmit() {

   this.authservice.registerUser(this.registerForm.getRawValue()).subscribe(data=>{
     this.router.navigate(['/login']);

   }

   )/*.catch((error)=>{
    this.errorMessage = error;
    setTimeout(() =>{
      this.errorMessage = null;
    },3000);
    console.log(error);*/

  }
  }


