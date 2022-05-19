import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IsAdminService } from 'src/app/services/is-admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  submitted = false;

  LoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  valid = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private service: IsAdminService
  ) {}

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      if (this.auth.log === 'admin') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/user']);
      }
    }
  }

  onSubmit(): void {
    this.submitted = true;
    // console.log(this.LoginForm.value, this.LoginForm.controls);
    // if (!this.LoginForm.valid) {
    //   this.valid = 'Check Your Email or Password';
    // } else {
    //   this.valid = '';
    // }

    if (this.LoginForm.valid) {
      this.auth.login(this.LoginForm.value).subscribe(
        (result: any) => {
          // console.log(result.email, result.email == 'admin@gmail.com');
          if (result.email == 'admin@gmail.com') {
            this.service.admin = true;
            this.router.navigate(['/']);
          } else {
            this.service.admin = false;
            this.router.navigate(['/user']);
          }
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }
}
