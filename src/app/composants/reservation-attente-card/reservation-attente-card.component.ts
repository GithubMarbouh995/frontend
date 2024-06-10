import { Component, Input, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Reservation } from 'src/app/models/Reservation';
import { ReservationService } from 'src/app/services/reservation.service';
@Component({
  selector: 'app-reservation-attente-card',
  templateUrl: './reservation-attente-card.component.html',
  styleUrls: ['./reservation-attente-card.component.css']
})
export class ReservationAttenteCardComponent implements OnInit {
  @Input() reservation: Reservation = {
    id: 0,
    date: new Date(),
    produit:{
      id:0,
    images:[],
    },
    client:{
      adresse:{}
    },
    accepted: false,
  };
  constructor(private reservationService:ReservationService) { }

  ngOnInit(): void {
    console.log(this.reservation)
  }
  
  Accepter(){
    this.reservation.accepted = true;
    this.reservationService.update(this.reservation).subscribe(data => {
      console.log(data);
    });
  }
}
