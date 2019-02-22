import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AjoutGlycemiePage } from './ajout-glycemie.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutGlycemiePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AjoutGlycemiePage]
})
export class AjoutGlycemiePageModule {}
