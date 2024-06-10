import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import  {Reservation} from 'src/app/models/Reservation';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/lvt-api/src/models';
import { ReservationService } from 'src/app/services/reservation.service';
import { LocationService } from 'src/app/services/location.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProduitService } from 'src/app/services/produit.service';
import { Utilisateur } from 'src/lvt-api/src/models';
import { forkJoin, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  model ?: NgbDateStruct;
  today = new Date().toISOString().substring(0, 16);
  date : Date= new Date();
  id_client : number= 0;
  client : Utilisateur  = {
    adresse: {
      codePostale: '',
      adresse1: '',
      ville: '',
    }
  };
  email : string = '';
  id_produit = this.route.snapshot.paramMap.get('id');
  produit : Produit = {
    id: 0,
    images: [],
  };
  Reservation ?: Reservation;
  verify_produit : Reservation[] = [];
  verify_produit_2 : Location[] = [];
  constructor(private route: ActivatedRoute,private reservationService : ReservationService,  private locationService : LocationService, private authentificationService : AuthenticationService, private produitService: ProduitService ) { }

  ngOnInit(): void {
    this.getIdClient();
    this.getProduit();
  }

  getIdClient() {
    this.email= localStorage.getItem('auth') || '';
    this.authentificationService.getId(this.email).subscribe(
      data => {
        this.id_client = data;
      }
    );
  }

  confirmer(){
    const date = new Date(this.date).toISOString().substring(0, 16);
    const produit_id = Number(this.route.snapshot.paramMap.get('id'));
  
    // Récupérer le produit de la base de données
    this.produitService.getProduit(produit_id).subscribe(
      produit => {
        // Créer la réservation une fois que le produit est récupéré
        const reservation = {
          date: this.date+":00Z",
          client_id: this.id_client,
          produit: produit, // Ajouter le produit récupéré à la réservation
          accepted: false,
        };
  
        this.reservationService.saveOrUpdate(reservation).subscribe(
          data => {
            console.log(data);
          }
        ); 
      },
      error => {
        console.error('Erreur lors de la récupération du produit', error);
      }
    );
  }
  
  createReservation1() {
    const produit$ = this.produitService.getProduit(Number(this.id_produit));
    const client$ = this.authentificationService.finbyId(this.id_client);
  
    forkJoin([produit$, client$]).subscribe(
      ([produit, client]) => {
        const reservation = {
          date: this.date+":00Z",
          produit: produit,
          client: client, // Ajouter le client récupéré à la réservation
          accepted: false,
        };
        console.log(reservation);
        this.reservationService.saveOrUpdate(reservation).subscribe(
          data => {
            console.log(data);
          }
        );
      },
      error => {
        console.error('Erreur lors de la récupération du produit ou du client', error);
      }
    );
  }

  createReservation() {
    this.produitService.getProduit(Number(this.id_produit)).pipe(
      switchMap(produit => {
        return this.authentificationService.finbyId(this.id_client).pipe(
          map(client => {
            return { produit, client };
          })
        );
      })
    ).subscribe(
      ({ produit, client }) => {
        const reservation = {
          date: this.date + ":00Z",
          produit: produit,
          client: client, // Ajouter le client récupéré à la réservation
          accepted: false,
        };
  
        this.reservationService.saveOrUpdate(reservation).subscribe(
          data => {
            console.log(data);
          }
        );
      },
      error => {
        console.error('Erreur lors de la récupération du produit ou du client', error);
      }
    );
  }




  verify(){
    console.log(this.date);
    const localDate = new Date(this.date);
    localDate.setMinutes(localDate.getMinutes() - localDate.getTimezoneOffset());
    const date = localDate.toISOString().substring(0, 16)+":00Z";
    console.log(date)
    this.reservationService.verify(Number(this.route.snapshot.paramMap.get('id')), date).subscribe(
      data => {
        this.verify_produit = data;
        console.log(data);
      }
    );
    this.reservationService.verify_2(Number(this.route.snapshot.paramMap.get('id')), date).subscribe(
      data => {
        this.verify_produit_2 = data ;
        console.log(this.verify_produit_2);
      }
    );
  }

getProduit() {
  this.produitService.getProduit(Number(this.route.snapshot.paramMap.get('id'))).subscribe(
    data => {
      console.log(data);
      this.produit=data;
    }
  );
}

getUtilisateur(){
  this.authentificationService.finbyId(this.id_client).subscribe(
    (data: Utilisateur) => {
      this.client = data;
      console.log(data);
    },
    (error) => {
      console.log(error);
    }
  );
}

}
