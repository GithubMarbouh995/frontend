import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Boutique } from 'src/app/models/Boutique';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AvisService } from 'src/app/services/avis.service';
import { BoutiqueService } from 'src/app/services/boutique.service';
import { ImageprocessingService} from 'src/app/services/imageprocessing.service';


@Component({
  selector: 'app-boutique-detail-page',
  templateUrl: './boutique-detail-page.component.html',
  styleUrls: ['./boutique-detail-page.component.css']
})
export class BoutiqueDetailPageComponent {
  constructor(private boutiqueService: BoutiqueService, private activatedRoute: ActivatedRoute, private imageService: ImageprocessingService,private avisService: AvisService, private authService: AuthenticationService) { };
  boutique: Boutique = new Boutique(0, '', '', '', '', '', '', {}, []);
  boutiques: Boutique[] = [
  ];
  avis: any[] = [];
  clients: any[] = [];
  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.getAvisByBoutique(id);
    this.boutiqueService.findAll().subscribe(data => {
      this.boutiques = data; this.boutique = this.getBoutiqueById(id) ||  new Boutique(0, '', '', '', '', '', '', {}, []);;
    });


  }
  // getBoutiqueById(id: number) {

  //   return this.boutiques.find((boutique) => boutique.id == id);
  // }

  getBoutiqueById(id: number) {
    let boutique = this.boutiques.find((boutique) => boutique.id == id);
    if (boutique) {
      boutique = this.imageService.createImagesBoutique(boutique);
    }
    return boutique;
  }
  
  goToListProduits() {

  }
  // getAvisByBoutique(id_boutique: any) { 
  //   this.avisService.getAvisByBoutique(id_boutique).subscribe(data => {
  //     this.avis = data;
  //     console.log(data);
  //   });
  // }
  getAvisByBoutique(id_boutique: any) {
    this.avisService.getAvisByBoutique(id_boutique).subscribe(avisList => {
      this.avis = avisList;
      console.log(avisList);
  
      // Initialize the clients list
      this.clients = [];
  
      // For each avis, get the corresponding client object
      this.avis.forEach((avis, index) => {
        if (index === 0) {
          this.clients[index] = avis.client;
        } else {
          // For the other avis, use the client id to get the client object
          const idClient = avis.client;
          console.log(idClient);
        
        // Check if the client id exists
        if (idClient) {
          // Make a request to get the client object
          this.authService.finbyId(idClient).subscribe(client => {
            // Add the client object to the clients list at the corresponding index
            this.clients[index] = client;
          });
        }
      }
      });
  
      console.log(this.clients);
    });
  }
}
