import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';
import { Reservation } from 'src/app/models/Reservation';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { BoutiqueService } from 'src/app/services/boutique.service';
import { Boutique } from 'src/app/models/Boutique';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
   Rerservations : Reservation[] = [];
    clientId: number = 0;
    Boutiques : Boutique[]  = [];
  constructor(private reservationService: ReservationService,private route: ActivatedRoute,private authService: AuthenticationService, private boutiqueService: BoutiqueService) { }

  ngOnInit(): void {
    this.getIdClient();
  }

  // getReservations(){
  //   this.reservationService.getByClient(this.clientId).subscribe(data => {
  //     console.log(data);
  //     this.Rerservations = data;
  //   });
  // }
  getReservations() {
    this.reservationService.getByClient(this.clientId).subscribe(data => {
      this.Rerservations = data;
      this.Boutiques = []; // initialiser la liste des boutiques
  
      // Pour chaque réservation, obtenir l'objet boutique correspondant
      this.Rerservations.forEach((reservation, index) => {
        // Obtenir l'id de la boutique à partir de l'objet produit
        const idBoutique = reservation.produit?.id_boutique;
  
        // Vérifier si l'id de la boutique existe
        if (idBoutique) {
          // Faire une requête pour obtenir l'objet boutique
          this.boutiqueService.findById(idBoutique).subscribe(boutique => {
            // Ajouter l'objet boutique à la liste des boutiques à l'index correspondant
            this.Boutiques[index] = boutique;
          });
        }
      });
  
      console.log(this.Rerservations);
      console.log(this.Boutiques);
    });
  }

  getIdClient() {
    const email= localStorage.getItem('auth') || '';
    this.authService.getId(email).subscribe(
      data => {
        this.clientId = data;
        this.getReservations();
      }
    );
  }

  deleteReservation(id: number){
    this.reservationService.deleteById(id).subscribe(data => {
      this.getReservations();
    });
  }
}
