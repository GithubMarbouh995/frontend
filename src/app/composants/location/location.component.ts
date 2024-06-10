import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import  {Location} from 'src/app/models/Location';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from 'src/app/services/location.service';
import { MatDialog } from '@angular/material/dialog';
import { TestComponent } from 'src/app/test/test.component';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Produit, Reservation } from 'src/lvt-api/src/models';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProduitService } from 'src/app/services/produit.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  model ?: NgbDateStruct;
  today = new Date().toISOString().substring(0, 16);
  datedebut : Date= new Date();
  datefin : Date = new Date();
  id_client : number =0;
  email : string = '';
  id_produit = this.route.snapshot.paramMap.get('id');
  location ?: Location
  produit : Produit = {
    id: 0,
    images: [],
  };
  verify_produit : Location[] = [];
  verify_produit_2 : Reservation[] = [];
  constructor(private route: ActivatedRoute, private locationService : LocationService , public dialog: MatDialog, private modalService: NgbModal, private authentificationService : AuthenticationService,private produitService: ProduitService) {  }

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
    const datedebut = new Date(this.datedebut).toISOString().substring(0, 16);
    const datefin = new Date(this.datefin).toISOString().substring(0, 16);
    const produit_id = Number(this.route.snapshot.paramMap.get('id'));
  
    // Récupérer le produit de la base de données
    this.produitService.getProduit(produit_id).subscribe(
      produit => {
        // Créer la réservation une fois que le produit est récupéré
        const reservation = {
          datedebut: this.datedebut+":00Z",
          datefin: this.datefin+":00Z",
          produit_id: produit_id,
          client_id: this.id_client,
          produit: produit, 
          // Ajouter le produit récupéré à la réservation
        };
  
        this.locationService.saveOrUpdate(reservation).subscribe(
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

  openDialog() {
    this.dialog.open(TestComponent)
  }
  
  openModel(){
    const modelDiv = document.getElementById('myModal');
    if(modelDiv != null){
      modelDiv.style.display = "block";
    }
    
  } 

  closeModel(){
    const modelDiv = document.getElementById('myModal');
    if(modelDiv != null){
      modelDiv.style.display = "none";
    }
    
  } 

  verify(){
    const localDateDebut = new Date(this.datedebut);
    localDateDebut.setMinutes(localDateDebut.getMinutes() - localDateDebut.getTimezoneOffset());
    const datedebut = localDateDebut.toISOString().substring(0, 16)+":00Z";
    const localDateFin = new Date(this.datefin);
    localDateFin.setMinutes(localDateFin.getMinutes() - localDateFin.getTimezoneOffset());
    const datefin = localDateFin.toISOString().substring(0, 16)+":00Z";
    this.locationService.verify(Number(this.route.snapshot.paramMap.get('id')), datedebut , datefin).subscribe(
      data => {
        this.verify_produit = data;
        console.log(data);
      }
    );
    this.locationService.verify_2(Number(this.route.snapshot.paramMap.get('id')), datedebut , datefin).subscribe(
      data => {
        this.verify_produit_2 = data;
        console.log(data);
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

  createLocation() {
    const produit$ = this.produitService.getProduit(Number(this.id_produit));
    const client$ = this.authentificationService.finbyId(this.id_client);
    const datedebut = new Date(this.datedebut).toISOString().substring(0, 16);
    const datefin = new Date(this.datefin).toISOString().substring(0, 16);
    forkJoin([produit$, client$]).subscribe(
      ([produit, client]) => {
        const reservation = {
          datedebut: this.datedebut+":00Z",
          datefin: this.datefin+":00Z",
          produit: produit,
          client: client, // Ajouter le client récupéré à la réservation
          accepted: false,
        };
        console.log(produit, client)
        this.locationService.saveOrUpdate(reservation).subscribe(
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





}
