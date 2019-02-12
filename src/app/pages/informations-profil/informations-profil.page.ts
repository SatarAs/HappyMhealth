import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/data/firestore.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import {AuthService} from '../../services/auth.service';
import {  AngularFirestoreCollection} from 'angularfire2/firestore';
import {Router} from '@angular/router';

@Component({
  selector: 'app-informations-profil',
  templateUrl: './informations-profil.page.html',
  styleUrls: ['./informations-profil.page.scss'],
})
export class InformationsProfilPage implements OnInit {
  userForm: FormGroup;
  constructor(public loadingCtrl: LoadingController, private firestoreService: FirestoreService, private router: Router, public formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      'nom': [null, Validators.required],
      'prenom': [null, Validators.required],
      'age': [null, Validators.required],
      'poids': [null, Validators.required],
      'taille': [null, Validators.required]
    });
  }
  async ajoutUser() {
    const loading = await this.loadingCtrl.create();
    const nom = this.userForm.value.nom;
    const prenom = this.userForm.value.prenom;
    const age = this.userForm.value.age;
    const poids = this.userForm.value.poids;
    const taille = this.userForm.value.taille;

    this.firestoreService.ajoutUser(nom, prenom, age, poids, taille).then(
        () => {
          loading.dismiss().then(() => {this.router.navigateByUrl('tabs/tab1');});
        },
        error => {
          console.error(error);
        }
    );

    return await loading.present();
  }
  ngOnInit() {
  }

}
