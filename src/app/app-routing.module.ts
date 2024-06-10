import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { ModalComponent } from './composants/modal/modal.component';
import {BoutiquePageComponent} from "./pages/boutique-page/boutique-page.component";
import {ProduitsBoutiqueComponent} from "./pages/produits-boutique/produits-boutique.component";
import { PageReservationComponent } from './pages/page-reservation/page-reservation.component';
import { BoutiqueDetailPageComponent } from './pages/boutique-detail-page/boutique-detail-page.component';
import { PageRechercheComponent } from './pages/page-recherche/page-recherche.component';
import { LocationComponent } from './composants/location/location.component';
import { ReservationComponent } from './composants/reservation/reservation.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNouveauteComponent } from './pages/page-nouveaute/page-nouveaute.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { DevenirVendeurComponent } from './pages/user-dashboard/devenir-vendeur/devenir-vendeur.component';
import { HistoriquesComponent } from './pages/user-dashboard/historiques/historiques.component';
import { ReservationAttenteComponent } from './pages/user-dashboard/reservation-attente/reservation-attente.component';
import { ReservationsComponent } from './pages/user-dashboard/reservations/reservations.component';
import { MesProduitsComponent } from './pages/user-dashboard/vendeur/mes-produits/mes-produits.component';
import { MaBoutiqueComponent } from './pages/user-dashboard/vendeur/ma-boutique/ma-boutique.component';
import { LocationsComponent } from './pages/user-dashboard/locations/locations.component';
import { LocationAttenteComponent } from './pages/user-dashboard/location-attente/location-attente.component';
import { SupprimerClientComponent } from './pages/user-dashboard/supprimer-client/supprimer-client.component';
import {authGuard} from "./services/guard/auth.guard";



const routes: Routes = [
  {path : '', component : PageHomeComponent},//ah
  { path: 'inscrire', component: PageInscriptionComponent},//ah
  { path: 'login', component: PageLoginComponent }//AH
  ,
  { path: 'article/:id', component: DetailArticleComponent},//ah
  { path: 'reservation/:id/modal', component: ModalComponent,
    canActivate: [authGuard]
  },
  { path: 'boutique', component: BoutiquePageComponent},//ah
  { path: 'boutique/:id/produits', component: ProduitsBoutiqueComponent},//ah
  { path: 'boutiques/:id', component: BoutiqueDetailPageComponent},//ah
  { path: 'recherche', component: PageRechercheComponent },//ah
  { path: 'location/:id', component: LocationComponent,
    canActivate: [authGuard]
  },
  {path: 'reservation/:id', component: ReservationComponent,
  canActivate: [authGuard]
  },
  { path: 'profile', component: ProfileComponent,
  canActivate: [authGuard]
  },
  { path: 'dashboard', component: DashboardComponent,
    canActivate: [authGuard]

  },
  { path: 'new', component: PageNouveauteComponent},//ah
  {
    path: 'user-dashboard',
    canActivate: [authGuard],
    component: UserDashboardComponent,
    children: [
      { path: 'reservations', component: ReservationsComponent ,
      canActivate: [authGuard]
      },
      { path: 'profile', component: ProfileComponent,
      canActivate: [authGuard]
      },
      { path: 'historiques', component: HistoriquesComponent,
      canActivate: [authGuard]

      },
      { path: 'devenir-vendeur', component: DevenirVendeurComponent,
      canActivate: [authGuard]
      },
      { path: 'produits', component: MesProduitsComponent ,
      canActivate: [authGuard]
      },
      { path: 'boutique', component: MaBoutiqueComponent ,
      canActivate: [authGuard]
      },
      { path: 'reservationsEnAttente', component: ReservationAttenteComponent,
      canActivate: [authGuard]
      },
      { path: 'locations', component: LocationsComponent,
      canActivate: [authGuard]
      },
      { path: 'locationsEnAttente', component: LocationAttenteComponent,
      canActivate: [authGuard]
      },
      { path: 'clients', component: SupprimerClientComponent,
      canActivate: [authGuard]
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

