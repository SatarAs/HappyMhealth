import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class ImcPage implements OnInit {
  taille;
  poids;
  resultat;
  imc = 0;
  corpulence = '';
  constructor() { }



  calculImc() {


    this.imc = this.poids / Math.pow(this.taille, 2);

    this.resultat = 'IMC : ' + Math.round( this.imc * 100 ) / 100;

    if (this.imc < 18.5) {
      this.corpulence = 'Insuffisence pondérale';
    } else if (this.imc > 18.5 && this.imc < 24.9) {
      this.corpulence = 'Corpulence normale';
    } else if (this.imc >= 25) {
      this.corpulence = 'Surpoids';
    } else if (this.imc >= 30) {
      this.corpulence = 'Obésité';
    }

  }



  recupTaille(event: Event) {
    this.taille = (<HTMLInputElement>event.target).value;
  }

  recupPoids(event: Event) {
    this.poids = (<HTMLInputElement>event.target).value;
  }
  ngOnInit() {
  }

}
