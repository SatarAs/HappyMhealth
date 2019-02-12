import { Component, OnInit } from '@angular/core';
// import * as firebase from 'Firebase';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
// import {snapshotToArray} from '../list-food/list-food.page';
import { FirestoreService } from '../../services/data/firestore.service';
import { Observable } from 'rxjs';
import { Aliment } from '../../models/aliment.interface';
import { AngularFirestore } from 'angularfire2/firestore';
import {  AngularFirestoreCollection} from 'angularfire2/firestore';
import {AuthService} from '../../services/auth.service';
import { LoadingController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.page.html',
  styleUrls: ['./recherche.page.scss'],
})
export class RecherchePage implements OnInit {
  // aliments = [];
  searchForm: FormGroup;
  // ref = firebase.database().ref('aliments/');
  labels;
  ig;
  results: any;
  public categoryList;
  public alimentList;
  private user: firebase.User;

  constructor(public router: Router, private formBuilder: FormBuilder, private firestoreService: FirestoreService, public firestore: AngularFirestore, private auth: AuthService, public loadingCtrl: LoadingController) { this.searchForm = this.formBuilder.group({
    'searchCategory': [null, Validators.required],
    'searchLabel': [null, Validators.required]
  });

    }

    search() {
      const categorie = this.searchForm.value.searchCategory;
    this.alimentList = this.firestoreService.getAlimentList(this.titleCaseWord(this.labels), categorie).valueChanges();

    }

    autoComplete(): AngularFirestoreCollection<Aliment> {
    const self = this;
    self.results = self.firestore.collection(`Aliment`, ref => ref
      .orderBy('label')
      .startAt(self.titleCaseWord(self.labels)).endAt(self.titleCaseWord(self.labels) + '\uf8ff').where('categorie', '==', self.searchForm.value.searchCategory).limit(10)).valueChanges();

    return self.results;
    }

  titleCaseWord(word: string) {
    if (!word) return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }

  get authenticated(): boolean {
    return this.user !== null;
  }

  async ajoutFavoris() {
    const loading = await this.loadingCtrl.create();
    const email = this.auth.getEmail();
    const nom = document.getElementById('labelFav').innerHTML;
    const ig = document.getElementById('igFav').innerHTML;

    this.firestoreService.ajoutFavoris(email, nom, ig).then(
      () => {
        loading.dismiss().then(() => {this.router.navigateByUrl('tabs/indexGlycemie');});
      },
      error => {
        console.error(error);
      }
    );

    return await loading.present();


  }












  ngOnInit() {
    this.categoryList = this.firestoreService.getCategoryList().valueChanges();

  }

}
