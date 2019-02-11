import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {User} from '../models/user.interface';
import {AngularFirestoreCollection, AngularFirestore} from 'angularfire2/firestore';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  public user;

  constructor (private router: Router, public auth: AuthService, public firestore: AngularFirestore) {

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

  ngOnInit()  {


  }
}
