import { Component, OnChanges, OnInit } from '@angular/core';
import { WholeServiceService } from '../whole-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnChanges {
  nav = false
  loading = true;

  constructor(private service: WholeServiceService) { }

  ngOnInit(): void {
    this.nav = this.service.sideNav
  }

  ngOnChanges(){
    this.nav = this.service.sideNav
  }

  onc(){
    this.nav = this.service.sideNav
  }

}
