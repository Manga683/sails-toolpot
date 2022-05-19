import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  generatePswd: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required ,Validators.minLength(8)]),
      're-password': new FormControl(null, [Validators.required]),
  }) ; 

  constructor() { }

  ngOnInit(): void {
  }

  onChangePassword(){
    console.log(this.generatePswd.value)
    console.log(this.generatePswd.valid)
  }

}
