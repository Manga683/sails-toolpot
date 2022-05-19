import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-project',
  templateUrl: './user-project.component.html',
  styleUrls: ['./user-project.component.scss']
})
export class UserProjectComponent implements OnInit {

  userProject:any = []
  constructor(private service: UserServiceService) { }

  ngOnInit(): void {
    this.userProject = this.service.userProject
  }

  

}
