import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  signUpForm: FormGroup = new FormGroup({
    firstname: new FormControl("", [Validators.required]),
    lastname: new FormControl("", [Validators.required]),
    dob: new FormControl("", [Validators.required]),
    age: new FormControl("", [Validators.required,Validators.pattern("^[0-9]*$"),]),
    email: new FormControl("", [Validators.required]),
  });

  constructor(
    private router: Router
  ) { }
  ngOnInit(): void {

  }

  onSubmitClicked(data:any) {
    console.log(this.signUpForm.value);
    this.router.navigate(['/images']);
  }
  
}
