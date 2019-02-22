import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController} from '@ionic/angular';
import {FirestoreService} from '../../services/data/firestore.service';
import {AuthService} from '../../services/auth.service';
import {AngularFirestore} from 'angularfire2/firestore';

@Component({
  selector: 'app-suivi-glycemie',
  templateUrl: './suivi-glycemie.page.html',
  styleUrls: ['./suivi-glycemie.page.scss'],
})
export class SuiviGlycemiePage implements OnInit {
  public loading;
  public suivi;

  constructor(public loadingCtrl: LoadingController,
              public firestoreService: FirestoreService,
              private auth: AuthService,
              public alertCtrl: AlertController,
              private firestore: AngularFirestore) {
  }


  async deleteSuivi(id: String) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Etes vous sur de vouloir supprimer cet élément ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('cancel');
          }
        }, {
          text: 'Oui',
          handler: () => {
            this.firestore.doc(`Glycemie/${id}`).delete();
          }
        }
      ]
    });

    await alert.present();
  }

  async ngOnInit() {
     while (this.auth.getEmail() == null) {
      this.loading = await this.loadingCtrl.create({
        message: 'Chargement en cours'
      });
    }


    this.suivi = this.firestoreService.getGlycemieFull();
    // return await this.loading.dismiss();
   }



}
