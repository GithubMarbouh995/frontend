import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './composants/header/header.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import {FooterComponent} from "./composants/footer/footer.component";
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { ModalComponent } from './composants/modal/modal.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PageHomeComponent } from './pages/page-home/page-home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import  { BoutiqueDetailComponent } from './composants/boutique-detail/boutique-detail.component';
import { BoutiqueCardComponent } from './composants/boutique-card/boutique-card.component';
import { ProduitsBoutiqueComponent } from './pages/produits-boutique/produits-boutique.component';
import { BoutiquePageComponent } from './pages/boutique-page/boutique-page.component';
import {BoutiqueDetailPageComponent} from "./pages/boutique-detail-page/boutique-detail-page.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommentaireComponent } from './pages/boutique-detail-page/commentaire/commentaire.component';
import { PageReservationComponent } from './pages/page-reservation/page-reservation.component';
import { PageRechercheComponent } from './pages/page-recherche/page-recherche.component';
import { LocationComponent } from './composants/location/location.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { ReservationComponent } from './composants/reservation/reservation.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
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
import { ModalCreateBoutiqueComponent } from './composants/modal-create-boutique/modal-create-boutique.component';
import { ReservationAttenteCardComponent } from './composants/reservation-attente-card/reservation-attente-card.component';
import { LocationsComponent } from './pages/user-dashboard/locations/locations.component';
import { ModalCreateProduitComponent } from './composants/modal-create-produit/modal-create-produit.component';
import { ModalUpdateProduitComponent } from './composants/modal-update-produit/modal-update-produit.component';
import { LocationAttenteComponent } from './pages/user-dashboard/location-attente/location-attente.component';
import { LocationAttenteCardComponent } from './composants/location-attente-card/location-attente-card.component';
import { SupprimerClientComponent } from './pages/user-dashboard/supprimer-client/supprimer-client.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PaginationComponent,
    PageInscriptionComponent,
    PageLoginComponent,
    DetailArticleComponent,
    ModalComponent,
    PageHomeComponent,
    BoutiqueDetailComponent,
    BoutiqueCardComponent,
    ProduitsBoutiqueComponent,
    BoutiquePageComponent,
    BoutiqueDetailPageComponent,
    PageReservationComponent,
    CommentaireComponent,
    PageRechercheComponent,
    LocationComponent,
    TestComponent,
    ReservationComponent,
    ProfileComponent,
    DashboardComponent,
    PageNouveauteComponent,
    UserDashboardComponent,
    DevenirVendeurComponent,
    HistoriquesComponent,
    ReservationAttenteComponent,
    ReservationsComponent,
    MaBoutiqueComponent,
    MesProduitsComponent,
    ModalCreateBoutiqueComponent,
    ReservationAttenteCardComponent,
    LocationsComponent,
    ModalCreateProduitComponent,
    ModalUpdateProduitComponent,
    LocationAttenteComponent,
    LocationAttenteCardComponent,
    SupprimerClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(
      {
      loader:{
        provide: TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps: [HttpClient]
    }
    }
    )
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
