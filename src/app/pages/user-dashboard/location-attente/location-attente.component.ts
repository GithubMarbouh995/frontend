import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/models/Location';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-location-attente',
  templateUrl: './location-attente.component.html',
  styleUrls: ['./location-attente.component.css']
})
export class LocationAttenteComponent implements OnInit {
  boutique_id: number = Number(localStorage.getItem('boutiqueId')) ;
  locations: Location[] = [];
  constructor(private locationService : LocationService) { }

  ngOnInit(): void {
    this.getLocationAttente();
  }
  getLocationAttente(){
    this.locationService.getNotAccepted(this.boutique_id).subscribe(data => {
      console.log(data);
      this.locations = data;
    }
  )}
}
