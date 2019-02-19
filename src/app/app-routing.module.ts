import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'repas', loadChildren: './pages/repas/repas.module#RepasPageModule' },
  { path: 'matin', loadChildren: './pages/matin/matin.module#MatinPageModule' },
  { path: 'midi', loadChildren: './pages/midi/midi.module#MidiPageModule' },
  { path: 'soir', loadChildren: './pages/soir/soir.module#SoirPageModule' },
  { path: 'recommandations', loadChildren: './pages/recommandations/recommandations.module#RecommandationsPageModule' },
  { path: 'informations-profil', loadChildren: './pages/informations-profil/informations-profil.module#InformationsProfilPageModule' },
  { path: 'modifier-poids', loadChildren: './pages/modifier-poids/modifier-poids.module#ModifierPoidsPageModule' },
  { path: 'modifier-taille', loadChildren: './pages/modifier-taille/modifier-taille.module#ModifierTaillePageModule' },
  { path: 'imc', loadChildren: './pages/imc/imc.module#ImcPageModule' },
  { path: 'img', loadChildren: './pages/img/img.module#ImgPageModule' },
  { path: 'collation-sport', loadChildren: './pages/collation-sport/collation-sport.module#CollationSportPageModule' },
  { path: 'sport-faible-intensite', loadChildren: './pages/sport-faible-intensite/sport-faible-intensite.module#SportFaibleIntensitePageModule' },
  { path: 'sport-moyenne-intensite', loadChildren: './pages/sport-moyenne-intensite/sport-moyenne-intensite.module#SportMoyenneIntensitePageModule' },
  { path: 'sport-intense', loadChildren: './pages/sport-intense/sport-intense.module#SportIntensePageModule' },
  { path: 'ajout-glycemie', loadChildren: './pages/ajout-glycemie/ajout-glycemie.module#AjoutGlycemiePageModule' },
  { path: 'suivi-glycemie', loadChildren: './pages/suivi-glycemie/suivi-glycemie.module#SuiviGlycemiePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
