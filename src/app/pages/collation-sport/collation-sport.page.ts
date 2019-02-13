import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-collation-sport',
  templateUrl: './collation-sport.page.html',
  styleUrls: ['./collation-sport.page.scss'],
})
export class CollationSportPage implements OnInit {

  constructor(private router: Router) { }

  sportFaible() {
    this.router.navigateByUrl('tabs/sport-faible-intensité');
  }

  sportMoyen() {
    this.router.navigateByUrl('tabs/sport-moyenne-intensité');
  }

  sportIntense() {
    this.router.navigateByUrl('tabs/sport-intense');
  }
  ngOnInit() {
  }

}
