import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Location } from 'src/app/models/Location';
import { BoutiqueService } from 'src/app/services/boutique.service';
import { Boutique } from 'src/app/models/Boutique';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  Locations : Location[] = [];
  Boutiques: Boutique[] = [];
    clientId: number = 0;

  constructor(private locationService: LocationService,private route: ActivatedRoute,private authService: AuthenticationService, private boutiqueService: BoutiqueService) { }

  ngOnInit(): void {
    this.getIdClient();
  }

  // getLocations(){
  //   this.locationService.getByClient(this.clientId).subscribe(data => {
  //     this.Locations = data;
  //     console.log(data);
  //   });
  // }
   

  getLocations() {
    this.locationService.getByClient(this.clientId).subscribe(data => {
      this.Locations = data;
      this.Boutiques = []; // initialiser la liste des boutiques
  
      // Pour chaque location, obtenir l'objet boutique correspondant
      this.Locations.forEach((location, index) => {
        // Obtenir l'id de la boutique à partir de l'objet produit
        const idBoutique = location.produit?.id_boutique;
  
        // Vérifier si l'id de la boutique existe
        if (idBoutique) {
          // Faire une requête pour obtenir l'objet boutique
          this.boutiqueService.findById(idBoutique).subscribe(boutique => {
            // Ajouter l'objet boutique à la liste des boutiques à l'index correspondant
            this.Boutiques[index] = boutique;
          });
        }
      });
  
      console.log(this.Locations);
      console.log(this.Boutiques);
    });
  }




  getIdClient() {
    const email= localStorage.getItem('auth') || '';
    this.authService.getId(email).subscribe(
      data => {
        this.clientId = data;
        this.getLocations();
      }
    );
  }

  deleteLocation(id: number){
    this.locationService.deleteById(id).subscribe(data => {
      console.log(id);
      this.getLocations();
    });
  }

}
