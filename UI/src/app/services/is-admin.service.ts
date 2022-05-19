import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsAdminService {

  constructor() { }

  admin = true;
  userDetails = {
    Name: '',
    Email: '',
    Password: '',
  }
}
