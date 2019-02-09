import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-repas',
  templateUrl: './repas.page.html',
  styleUrls: ['./repas.page.scss'],
})
export class RepasPage implements OnInit {

  constructor(public router: Router) { }

  getMatin() {
    this.router.navigateByUrl('tabs/matin');
  }

  getMidi() {
    this.router.navigateByUrl('tabs/midi');
  }

  getSoir() {
    this.router.navigateByUrl('tabs/soir');
  }

  getCollation() {
    this.router.navigateByUrl('tabs/collation-soirée');
  }
  ngOnInit() {
  }

}
