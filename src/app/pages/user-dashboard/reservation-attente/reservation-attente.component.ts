import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/Reservation';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation-attente',
  templateUrl: './reservation-attente.component.html',
  styleUrls: ['./reservation-attente.component.css']
})
export class ReservationAttenteComponent implements OnInit {
  boutique_id: number = Number(localStorage.getItem('boutiqueId')) ;
  reservations: Reservation[] = [];
  Clients: any[] = [];
  constructor(private reservationService : ReservationService, private authService : AuthenticationService) { }


  ngOnInit(): void {
    this.getReservationAttente();
  }
   
  // getReservationAttente(){
  //   this.reservationService.getNotAccepted(this.boutique_id).subscribe(data => {
  //     console.log(data);
  //     this.reservations = data;
  //   });
  // }

  getReservationAttente(){
    this.reservationService.getNotAccepted(this.boutique_id).subscribe(data => {
      console.log(data);
      this.reservations = data;
      this.Clients = []; 

      this.reservations.forEach((reservation, index) => {
        const idClient = reservation.client.id;
  
        if (idClient) {
          this.authService.finbyId(idClient).subscribe(client => {
            this.Clients[index] = client;
          });
        }
      });
  
      console.log(this.reservations);
      console.log(this.Clients);
    });
  }


}
