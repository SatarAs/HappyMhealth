import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'tab4',
        children: [
          {
            path: '',
            loadChildren: '../tab4/tab4.module#Tab4PageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: 'inscription',
        children: [
          {
            path: '',
            loadChildren: '../pages/register/register.module#RegisterPageModule'
          }
        ]
      },
      {
        path: 'connexion',
        children: [
          {
            path: '',
            loadChildren: '../pages/login/login.module#LoginPageModule'
          }
        ]
      },
      {
        path: 'indexGlycemie',
        children: [
          {
            path: '',
            loadChildren: '../pages/recherche/recherche.module#RecherchePageModule'
          }
        ]
      },
      {
        path: 'repas',
        children: [
          {
            path: '',
            loadChildren: '../pages/repas/repas.module#RepasPageModule'
          }
        ]
      },
      {
        path: 'matin',
        children: [
          {
            path: '',
            loadChildren: '../pages/matin/matin.module#MatinPageModule'
          }
        ]
      },
      {
        path: 'soir',
        children: [
          {
            path: '',
            loadChildren: '../pages/soir/soir.module#SoirPageModule'
          }
        ]
      },
      {
        path: 'midi',
        children: [
          {
            path: '',
            loadChildren: '../pages/midi/midi.module#MidiPageModule'
          }
        ]
      },
      {
        path: 'collation-soirée',
        children: [
          {
            path: '',
            loadChildren: '../pages/collation-soir/collation-soir.module#CollationSoirPageModule'
          }
        ]
      },
      {
        path: 'recommandations',
        children: [
          {
            path: '',
            loadChildren: '../pages/recommandations/recommandations.module#RecommandationsPageModule'
          }
        ]
      },
      {
        path: 'informations-profil',
        children: [
          {
            path: '',
            loadChildren: '../pages/informations-profil/informations-profil.module#InformationsProfilPageModule'
          }
        ]
      },
      {
        path: 'modifier-poids',
        children: [
          {
            path: '',
            loadChildren: '../pages/modifier-poids/modifier-poids.module#ModifierPoidsPageModule'
          }
        ]
      },
      {
        path: 'modifier-taille',
        children: [
          {
            path: '',
            loadChildren: '../pages/modifier-taille/modifier-taille.module#ModifierTaillePageModule'
          }
        ]
      },
      {
        path: 'imc',
        children: [
          {
            path: '',
            loadChildren: '../pages/imc/imc.module#ImcPageModule'
          }
        ]
      },
      {
        path: 'img',
        children: [
          {
            path: '',
            loadChildren: '../pages/img/img.module#ImgPageModule'
          }
        ]
      },
      {
        path: 'ajout-glycemie',
        children: [
          {
            path: '',
            loadChildren: '../pages/ajout-glycemie/ajout-glycemie.module#AjoutGlycemiePageModule'
          }
        ]
      },
      {
        path: 'suivi-glycemie',
        children: [
          {
            path: '',
            loadChildren: '../pages/suivi-glycemie/suivi-glycemie.module#SuiviGlycemiePageModule'
          }
        ]
      },
      {
        path: 'collation-sport',
        children: [
          {
            path: '',
            loadChildren: '../pages/collation-sport/collation-sport.module#CollationSportPageModule'
          }
        ]
      },
      {
        path: 'sport-faible-intensité',
        children: [
          {
            path: '',
            loadChildren: '../pages/sport-faible-intensite/sport-faible-intensite.module#SportFaibleIntensitePageModule'
          }
        ]
      },
      {
        path: 'sport-intense',
        children: [
          {
            path: '',
            loadChildren: '../pages/sport-intense/sport-intense.module#SportIntensePageModule'
          }
        ]
      },
      {
        path: 'sport-moyenne-intensité',
        children: [
          {
            path: '',
            loadChildren: '../pages/sport-moyenne-intensite/sport-moyenne-intensite.module#SportMoyenneIntensitePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
