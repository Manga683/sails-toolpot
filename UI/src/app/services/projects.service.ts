import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient) {}

  addingproject() {
    const data = {
      project_id: '',
      project_name: 'mangalaya1',
      description: 'team 3',
      start_date: '2022-01-21',
      end_date: '2022-03-21',
      status: 'done',
    };
    this.http
      .post('http://localhost:8080/project', JSON.stringify(data))
      .subscribe((data) => {
        console.log(data);
      });
  }
}
