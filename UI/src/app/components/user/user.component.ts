import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  // display of user Home
  display = true;

  constructor(private route: Router, private router: ActivatedRoute) {}

  ngOnInit(): void {}

  openProjects() {
    this.route.navigate(['/projectList']);
    this.display = false;
  }
}
