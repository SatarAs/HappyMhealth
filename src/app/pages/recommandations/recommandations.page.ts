import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommandations',
  templateUrl: './recommandations.page.html',
  styleUrls: ['./recommandations.page.scss'],
})
export class RecommandationsPage implements OnInit {
  paragraphe;
  nbrClick = 0;
  paragraphe2;
  nbrClick2 = 0;
  paragraphe3;
  nbrClick3 = 0;
  paragraphe4;
  nbrClick4 = 0;
  paragraphe5;
  nbrClick5 = 0;
  paragraphe6;
  nbrClick6 = 0;
  paragraphe7;
  nbrClick7 = 0;
  paragraphe8;
  nbrClick8 = 0;
  slideOpts = {
    effect: 'flip'
  };
  constructor() { }

  voir() {
    this.nbrClick ++;
    if(this.nbrClick % 2 === 0) {
      this.paragraphe = null;
    } else {

      this.paragraphe = `<p>Maquereau</p><p>Saumon Atlantique</p><p>Truite</p><p>Hareng</p><p>Flétan</p><p>Sardines en conserve</p>
                        <p>Crevettes</p><p>Morue</p>`;
    }

    return this.paragraphe;
  }

  voir2() {
    this.nbrClick2 ++;

    if(this.nbrClick2 % 2 === 0) {
      this.paragraphe2 = null;
    } else {

      this.paragraphe2 = `<p>Pains et féculents</p><p>Légumes</p><p>Fruits</p>`;
    }

    return this.paragraphe2;
  }

  voir3() {
    this.nbrClick3 ++;

    if(this.nbrClick3 % 2 === 0) {
      this.paragraphe3 = null;
    } else {

      this.paragraphe3 = `<p>Fruits :</p><p>Mûre</p><p>Canneberge</p><p>Bleuet</p><p>Framboise</p><p>Fraise</p><p>Pomme</p><p>Cerise</p><p>Prune</p><p>Avocat</p><p>Poire</p>
                           <p>Légumes :</p><p>Artichaut</p><p>Poivron</p><p>Chou rouge</p><p>Asperge</p><p>Oignon</p><p>Patate douce</p><p>Radis</p><p>Epinard</p><p>Aubergine</p><p>Brocolis</p>`;
    }

    return this.paragraphe3;
  }

  voir4() {
    this.nbrClick4 ++;

    if(this.nbrClick4 % 2 === 0) {
      this.paragraphe4 = null;
    } else {

      this.paragraphe4 = `<p>Pain à grains entiers</p><p>Son d'avoine</p><p>Céréales avec psyllium</p><p>Orge</p><p>Boulgour</p><p>Pâtes al dente</p><p>Patate douce</p><p>Pois chiches</p><p>Haricots rouges</p><p>Fèves</p>
                           `;
    }

    return this.paragraphe4;
  }

  voir5() {
    this.nbrClick5 ++;

    if(this.nbrClick5 % 2 === 0) {
      this.paragraphe5 = null;
    } else {

      this.paragraphe5 = `<p>Céréales petit déjeuner</p><p>Yaourts sucrés</p><p>Vinaigrettes et sauces</p><p>Condiments</p><p>Barres de céréales</p><p>Biscuits et gâteaux</p><p>Confitures, gelées et pâtes à tartiner</p>
                           `;
    }

    return this.paragraphe5;
  }

  voir6() {
    this.nbrClick6 ++;

    if(this.nbrClick6 % 2 === 0) {
      this.paragraphe6 = null;
    } else {

      this.paragraphe6 = `<p>Huiles végétales hydrogénées</p><p>Beurre</p><p>Crème</p><p>Fromage</p><p>Viandes grasses et charcuteries</p><p>Huiles de pépin de raisin, de sésame, de tournesol et de maïs</p>
                           `;
    }

    return this.paragraphe6;
  }

  voir7() {
    this.nbrClick7 ++;

    if(this.nbrClick7 % 2 === 0) {
      this.paragraphe7 = null;
    } else {

      this.paragraphe7 = `<p>Dans le cadre de l'alimentation pour diabétique, il est fortement recommandé de cuisiner au maximum ses propres plats et d'éviter les plats préparés et aliments industriels.</p>
                           `;
    }

    return this.paragraphe7;
  }

  voir8() {
    this.nbrClick8 ++;

    if(this.nbrClick8 % 2 === 0) {
      this.paragraphe8 = null;
    } else {

      this.paragraphe8 = `<p>On tolère 1 portion d'alcool par jour chez la femme et 2 portions par jour chez l'homme.</p><p>Une portion d'alcool correspond à :</p><p>350ml de bière</p><p>12cl de vin</p><p>4,5 cl d'alcool fort et spiritueux</p>
                           `;
    }

    return this.paragraphe8;
  }


  ngOnInit() {
  }

}


