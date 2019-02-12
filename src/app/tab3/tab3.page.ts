import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {User} from '../models/user.interface';
import {AngularFirestoreCollection, AngularFirestore} from 'angularfire2/firestore';
import {AlertController, LoadingController} from '@ionic/angular';
import {FirestoreService} from '../services/data/firestore.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  public user;
  public favoris;
  private _loading: any;

  constructor (private router: Router, public auth: AuthService, public firestore: AngularFirestore, public loadingCtrl: LoadingController, public firestoreService: FirestoreService, public alertCtrl: AlertController) {

  }
  goRegister() {
    this.router.navigateByUrl('tabs/inscription');
  }

  goLogin() {
    this.router.navigateByUrl('tabs/connexion');
  }

  logout() {
    // this.menu.close();
    this.auth.quit();
    this.router.navigateByUrl('/tabs/tab1');
  }

   getUser(): AngularFirestoreCollection<User> {
    const email2 = this.auth.getEmail();


    this.user = this.firestore.collection('User', ref => ref.where('email', '==', email2)).valueChanges();

    return this.user;


  }

  goModifPoids() {
    this.router.navigateByUrl('tabs/modifier-poids');
  }

  goModifTaille() {
    this.router.navigateByUrl('tabs/modifier-taille');
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

   async deleteFavoris(id: String) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Etes vous sur de vouloir supprimer ce favoris ?',
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
            this.firestore.doc(`Favoris/${id}`).delete();
          }
        }
      ]
    });

    await alert.present();
  }

   async ngOnInit()  {

    while (this.auth.getEmail() == null) {
      this._loading = await this.loadingCtrl.create({
        message: 'Chargement en cours'
      });
    }

     await this._loading.present();
     if (this.auth.getEmail() != null) {

       this.favoris = this.firestoreService.getFavoris();
       this.user = this.firestore.collection('User', ref => ref.where('email', '==', this.auth.getEmail())).valueChanges();
       await this._loading.dismiss();

     }

  }
}
