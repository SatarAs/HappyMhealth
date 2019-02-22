import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SuiviGlycemiePage } from './suivi-glycemie.page';

const routes: Routes = [
  {
    path: '',
    component: SuiviGlycemiePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SuiviGlycemiePage]
})
export class SuiviGlycemiePageModule {}
