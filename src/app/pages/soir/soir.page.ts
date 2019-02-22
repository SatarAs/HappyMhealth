import { Component, OnInit } from '@angular/core';
import {FirestoreService} from '../../services/data/firestore.service';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-soir',
  templateUrl: './soir.page.html',
  styleUrls: ['./soir.page.scss'],
})
export class SoirPage implements OnInit {
  public soirList;
  private loading;
  constructor(private firestoreService: FirestoreService,
              private loadingCtrl: LoadingController) { }

   async ngOnInit() {
     this.loading = await this.loadingCtrl.create({
       message: 'Chargement en cours'
     });

     this.loading.present();
    this.soirList = this.firestoreService.getSoir().valueChanges();
     await this.loading.dismiss();
  }

}
