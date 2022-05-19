import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data } from 'jquery';
import { map } from 'rxjs/operators';
import { constant } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class AdminUserDataService {
  errorMsg: null | undefined;

  constructor(private http: HttpClient) { }

  getUsersData() {
    return this.http.get(constant.firebase + "usersData.json")
      .pipe(
        map(
          (data: any) => {
            const userD = []
            for (const i in data) {
              if (data.hasOwnProperty(i)) {
                userD.push({ ...data[i], id: i })
              }
            }
            return userD
          }
        )
      )
  }

  postUserData(PostUser: { name: string, email: string, password: string }) {
    return this.http.post(constant.firebase + "usersData.json", PostUser)
  }

  updateUserData(userId: string, editUser: { Name: string, Email: string, Password: string }) {
    console.log("update", userId, editUser)
    return this.http.patch(constant.firebase + "usersData/" + userId + ".json", editUser)
  }

  deleteUserData(userId: string) {
    return this.http.delete(constant.firebase + "/usersData/" + userId + ".json")
  }
}
