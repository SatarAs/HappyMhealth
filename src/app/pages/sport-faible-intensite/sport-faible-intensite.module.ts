import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SportFaibleIntensitePage } from './sport-faible-intensite.page';

const routes: Routes = [
  {
    path: '',
    component: SportFaibleIntensitePage
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
  declarations: [SportFaibleIntensitePage]
})
export class SportFaibleIntensitePageModule {}
