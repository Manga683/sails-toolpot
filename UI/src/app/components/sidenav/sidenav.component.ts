import { Component, OnInit } from '@angular/core';

import { faHome, faLaptopCode, faUsers, faTools, faUserSecret, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  Home = faHome
  Project = faLaptopCode
  Users = faUsers
  profile = faUserCircle
  Tools = faTools
  Privileges = faUserSecret

  constructor() { }

  ngOnInit(): void {
  }

}
