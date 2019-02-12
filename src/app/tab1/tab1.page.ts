import { Component } from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  currentDate = new Date();

  constructor (public actionSheetController: ActionSheetController, private router: Router) {

  }

  async action() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Outils',
      buttons: [{
        text: 'IMC',
        icon: 'settings',
        handler: () => {
          this.router.navigateByUrl('tabs/imc');
        }
      }, {
        text: 'IMG',
        icon: 'settings',
        handler: () => {
          this.router.navigateByUrl( 'tabs/img');
        }
      }]
    });
    await actionSheet.present();
  }
}
