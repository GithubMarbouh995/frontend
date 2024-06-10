import { Component, OnInit } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { BoutiqueService } from 'src/app/services/boutique.service';
import { ImageprocessingService } from 'src/app/services/imageprocessing.service';
import { ProduitService } from 'src/app/services/produit.service';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { Produit } from 'src/lvt-api/src/models';

@Component({
  selector: 'app-mes-produits',
  templateUrl: './mes-produits.component.html',
  styleUrls: ['./mes-produits.component.css']
})
export class MesProduitsComponent implements OnInit {
  boutiqueId: number= 0;
  produits: Produit[] = [];
  showNewProduitForm: boolean = false;
  showUpdateProduitForm: boolean = false;
  index: number = 0;
  private cancelEventSubscription: Subscription;
  constructor(private sharedService: SharedServiceService, private boutiqueService: BoutiqueService,private produitService: ProduitService ,private imageService: ImageprocessingService) { 
    this.cancelEventSubscription = this.sharedService.cancelEvent$.subscribe(() => {
      this.showNewProduitForm = false;
    });
  }

  // getProduitsByBoutique() {
  //   this.boutiqueService.getAllProduitsFromBoutique(this.boutiqueId).subscribe(data => {
  //     this.produits = data;
  //     console.log(this.produits);
  //   });
  // }
  getProduitsByBoutique() {
    this.boutiqueService.getAllProduitsFromBoutique(this.boutiqueId).pipe(
      map((produits: Produit[]) => produits.map(produit => this.imageService.createImages(produit)))
    ).subscribe(data => {
      this.produits = data;
      console.log(this.produits);
    });
  }
  
  ngOnInit(): void {
    this.getBoutiqueId(localStorage.getItem('auth') || '');
  }
  ngOnDestroy() {
    this.cancelEventSubscription.unsubscribe();
  }
  supprimer(id: number){
    this.produitService.supprimerProduit(id).subscribe(data => {
      this.getProduitsByBoutique();
      alert("Produit supprimé avec succès")
    }
  )}
  getBoutiqueId(email: string){
    this.boutiqueService.getBoutiqueId(email).subscribe(data => {
      this.boutiqueId = data;
      localStorage.setItem('boutiqueId', this.boutiqueId.toString());
      this.getProduitsByBoutique();
    });
  }
}
