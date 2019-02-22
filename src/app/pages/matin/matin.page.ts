import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { FirestoreService } from '../../services/data/firestore.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import {LoadingController} from '@ionic/angular';


@Component({
  selector: 'app-matin',
  templateUrl: './matin.page.html',
  styleUrls: ['./matin.page.scss'],
})
export class MatinPage implements OnInit {

  public matinList;
  private loading;
  constructor(public router: Router,
              private firestoreService: FirestoreService,
              public firestore: AngularFirestore,
              private loadingCtrl: LoadingController) { }

   async ngOnInit() {
    this.loading = await this.loadingCtrl.create({
      message: 'Chargement en cours'
    });

    this.loading.present();
    this.matinList = this.firestoreService.getMatin().valueChanges();
     await this.loading.dismiss();
  }

}
