import { Component, DoCheck, OnInit } from '@angular/core';

import {Chart, registerables} from 'node_modules/chart.js'
import { interval } from 'rxjs';
import { AdminPrivilegeDataService } from 'src/app/services/admin-privilege-data.service';
import { AdminUserDataService } from 'src/app/services/admin-user-data.service';

import { IsAdminService } from 'src/app/services/is-admin.service';
import { WholeServiceService } from '../whole-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, DoCheck {
  admin = this.isAdmin.admin;
  nav = false;
  prompt = false;

  id = null;
  noOfProjects = 0;
  noOfUsers = 0;
  noOfTools = 0;
  

  constructor(private service: WholeServiceService,
              private isAdmin: IsAdminService,
              private projectService: AdminPrivilegeDataService,
              private userService: AdminUserDataService) { }

  ngOnInit(): void {
    this.nav = this.service.sideNav;
    this.prompt = this.service.newUser;

    // chart
    this.countOfProjects()
    this.countOfUsers()
    this.countOfTools()

    // interval 
    // const obs$ = interval(500);
    // obs$.subscribe((d)=>{
    //   console.log(d)
    // })


    Chart.register(...registerables);
    // const ctx = document.getElementById('myChart');
    // const myChart = new Chart("myChart", {
    //     type: 'bar',
    //     data: {
    //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //         datasets: [{
    //             label: '# of Votes',
    //             data: [12, 19, 3, 5, 2, 3],
    //             backgroundColor: [
    //                 'rgba(255, 99, 132, 0.2)',
    //                 'rgba(54, 162, 235, 0.2)',
    //                 'rgba(255, 206, 86, 0.2)',
    //                 'rgba(75, 192, 192, 0.2)',
    //                 'rgba(153, 102, 255, 0.2)',
    //                 'rgba(255, 159, 64, 0.2)'
    //             ],
    //             borderColor: [
    //                 'rgba(255, 99, 132, 1)',
    //                 'rgba(54, 162, 235, 1)',
    //                 'rgba(255, 206, 86, 1)',
    //                 'rgba(75, 192, 192, 1)',
    //                 'rgba(153, 102, 255, 1)',
    //                 'rgba(255, 159, 64, 1)'
    //             ],
    //             borderWidth: 1
    //         }]
    //     },
    //     options: {
    //         scales: {
    //             y: {
    //                 beginAtZero: true
    //             }
    //         }
    //     }
    // });
  }

  ngDoCheck(){
    this.nav = this.service.sideNav;
    this.prompt = this.service.newUser;
  }

  ngOnDestroy(){
    // if (this.id === this.noOfUsers){
    //   clearInterval(this.id)
    // }
  }

  onHandleError() {
    this.service.newUser = false;
  }


  countOfProjects(){
    return this.projectService.getPrivilegesData()
    .subscribe(data=>{
      this.noOfProjects = data.length;
    })
  }

  countOfUsers(){
    return this.userService.getUsersData()
    .subscribe(data=>{
      this.noOfUsers = data.length;
    })
  }

  countOfTools(){
    // return this.userService.getToolsData()
    // .subscribe(data=>{
      this.noOfTools = 30;
      // data.length;
    // })
  }

}
