import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.page.html',
  styleUrls: ['./img.page.scss'],
})
export class ImgPage implements OnInit {

  constructor() { }
  imcUser;
  ageImg;
  sexe;
  img;
  result = '';


  calculImg() {
    this.img = Math.round(((1.2 * this.imcUser) + (0.23 * this.ageImg) - (10.8 * this.sexe) - 5.4 ) * 100) / 100;

    if (this.sexe === 0) {
      if (this.img < 25.0 ) {
        this.result = 'Pas assez de graisse';
      } else if (this.img > 30.0) {
        this.result = 'Trop de graisse';
      } else {
        this.result = 'normal';
      }
    } else {
      if (this.img < 15.0 ) {
        this.result = 'Pas assez de graisse';
      } else if (this.img > 20.0) {
        this.result = 'Trop de graisse';
      } else {
        this.result = 'normal';
      }
    }

  }
  ngOnInit() {
  }

}
