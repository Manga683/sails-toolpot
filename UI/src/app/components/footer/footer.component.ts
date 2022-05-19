import { Component, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core'

import { faGoogle, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faGoogle = faGoogle; faTwitter=faTwitter; faInstagram=faInstagram; faYoutube=faYoutube;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
