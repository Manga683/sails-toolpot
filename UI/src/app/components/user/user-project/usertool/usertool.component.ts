import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usertool',
  templateUrl: './usertool.component.html',
  styleUrls: ['./usertool.component.scss'],
})
export class UsertoolComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    
  }

  goToLink(url: string) {
    window.open('https://' + url, '_blank');
  }
}
