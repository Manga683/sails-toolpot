import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  isSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z ]*$')]),
      lastName: new FormControl('', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.pattern('^[a-zA-Z ]*$')]),
      addressGroup: this.formBuilder.group({
        address: new FormControl('', [
          Validators.required,
          Validators.maxLength(255)
        ]),
        city: new FormControl('', [Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z ]*$')]),
        state: new FormControl('', [Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z ]*$')]),
        pincode: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(8),
          Validators.pattern('^[a-zA-Z0-9]*$')])
      }),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12),
        Validators.pattern('^[0-9]*$')]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(80),
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(12)
      ])
    });
  }

  form = this.formBuilder.group({

    lessons: this.formBuilder.array([])
  });



  get lessons() {
    return this.form.controls["lessons"] as FormArray;
  }

  addLesson() {
    const lessonForm = this.formBuilder.group({
      title: ['', Validators.required],
      level: ['beginner', Validators.required]
    });
    this.lessons.push(lessonForm);
  }

  deleteLesson(lessonIndex: number) {
    this.lessons.removeAt(lessonIndex);
  }

  onRegistrationFormSubmit() {
    this.isSubmitted = true;
    if (this.registrationForm.valid) {
      console.log("User Registration Form Submit", this.registrationForm.value);
    }

  }

  ngOnInit(): void {
  }



}
