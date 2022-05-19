import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})

export class ChangePasswordComponent implements OnInit {


  changePswd = new FormGroup({
    currentPswd: new FormControl(null,[Validators.minLength(8), Validators.required]),
    newPswd: new FormControl(null,[Validators.minLength(8), Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]),
    confirmPswd: new FormControl(null,[Validators.minLength(8), Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)],),
  },
  // {validator: this.pswdMatchValidator}
  )

  // icons
  faEyeSlash = faEyeSlash;
  faEye = faEye;

  // three column eye
  eye1 = true;
  eye2 = true;
  eye3 = true;


  constructor() { }

  ngOnInit(): void {
  }

  pswdMatchValidator(form: FormGroup){
    return form.controls['newPswd'].value === form.controls['confirmPswd'].value ? null : {'mismatch': true};
  }

  onSubmit(){
    console.log(this.changePswd.value)
  }

}
