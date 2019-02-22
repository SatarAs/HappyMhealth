import { Component, OnInit } from '@angular/core';
import {FirestoreService} from '../../services/data/firestore.service';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-midi',
  templateUrl: './midi.page.html',
  styleUrls: ['./midi.page.scss'],
})
export class MidiPage implements OnInit {
  public midiList;
  private loading;
  constructor(private firestoreService: FirestoreService,
              private loadingCtrl: LoadingController) { }

 async ngOnInit() {
    this.loading = await this.loadingCtrl.create({
      message: 'Chargement en cours'
    });

    this.loading.present();
    this.midiList = this.firestoreService.getMidi().valueChanges();
   await this.loading.dismiss();
  }

}
