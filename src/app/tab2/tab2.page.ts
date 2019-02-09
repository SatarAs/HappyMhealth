import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router){}

  goIndex() {
    this.router.navigateByUrl('tabs/indexGlycemie');
  }

  goRepas() {
    this.router.navigateByUrl('tabs/repas');
  }

  goRecommandation() {
    this.router.navigateByUrl('tabs/recommandations');
  }
}
