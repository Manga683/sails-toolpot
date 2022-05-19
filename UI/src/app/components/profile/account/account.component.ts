import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  password = "password"
  p = '*'
  passwordChange = '';
  account = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)])
  })

  constructor() { }

  ngOnInit(): void {
    this.passwordChange = this.p.repeat(this.password.length)
  }

}
