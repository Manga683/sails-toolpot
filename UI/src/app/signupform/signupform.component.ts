import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.scss']
})
export class SignupformComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm = new FormGroup({
    userData: new FormGroup({
      username: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(8), Validators.pattern('^[a-zA-Z]*$')]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    }),
    gender: new FormControl('male'),
    hobbies: new FormArray([]),
  });


  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);

  }
  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }
  onSubmit() {
    console.log(this.signupForm);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
