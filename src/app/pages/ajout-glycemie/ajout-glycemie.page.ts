import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FirestoreService} from '../../services/data/firestore.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoadingController} from '@ionic/angular';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-ajout-glycemie',
  templateUrl: './ajout-glycemie.page.html',
  styleUrls: ['./ajout-glycemie.page.scss'],
})
export class AjoutGlycemiePage implements OnInit {
  glycemieForm: FormGroup;
  constructor(private router: Router,
              private firestoreService: FirestoreService,
              public formBuilder: FormBuilder,
              public loadingCtrl: LoadingController,
              private auth: AuthService) {this.glycemieForm = this.formBuilder.group({
    'date': [null, Validators.required],
    'heure': [null, Validators.required],
    'taux': [null, Validators.required]
  }); }

   async ajoutTauxGlycemie() {
      const loading =  await this.loadingCtrl.create();
      const email = this.auth.getEmail();
      const date = this.glycemieForm.value.date;
      const heure = this.glycemieForm.value.heure;
      const taux = this.glycemieForm.value.taux;

     this.firestoreService.ajoutGlycemie(date, email, heure, taux).then(
         () => {
           loading.dismiss().then(() => {this.router.navigateByUrl('tabs/tab3'); });
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
