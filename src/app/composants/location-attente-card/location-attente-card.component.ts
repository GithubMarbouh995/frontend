import { ResourceLoader } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Location } from 'src/app/models/Location';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-location-attente-card',
  templateUrl: './location-attente-card.component.html',
  styleUrls: ['./location-attente-card.component.css']
})
export class LocationAttenteCardComponent implements OnInit {
  @Input() location: Location ={
    id: 0,
    datedebut: new Date(),
    datefin: new Date(),
    produit:{
      id:0,
    images:[],
    },
    client:{
      adresse:{}
    },
    accepted: false,

  };
  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    console.log(this.location)
  }
  Accepter(){
    let updatedLocation = {...this.location}
    updatedLocation.accepted = true;
    console.log(updatedLocation)
    this.locationService.update(updatedLocation).subscribe(data => {
    })
  }
}
