import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IsAdminService } from './is-admin.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  log = 'user';
  constructor(private router: Router, private service: IsAdminService) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    let t = this.getToken();
    if (t === 'admin') {
      this.log = 'admin';
    } else {
      this.log = 'user';
    }
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
    if (email === 'admin@gmail.com' && password === 'admin1234567') {
      this.setToken('admin');
      this.service.admin = true;
      return of({ email: 'admin@gmail.com' });
    } else {
      this.setToken('user');
      this.service.admin = false;
      return of({ email: 'user@gmail.com' });
    }
    // return throwError(new Error('Failed to login'));
  }
}
