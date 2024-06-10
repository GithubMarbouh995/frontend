import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../../services/produit.service';
import { BoutiqueService } from '../../services/boutique.service';
import { Produit } from 'src/lvt-api/src/models/produit';
import { Boutique } from 'src/app/models/Boutique';
import { ImageprocessingService } from '../../services/imageprocessing.service';
import { map } from 'rxjs';
@Component({
  selector: 'app-produits-boutique',
  templateUrl: './produits-boutique.component.html',
  styleUrls: ['./produits-boutique.component.css']
})
export class ProduitsBoutiqueComponent implements OnInit {
  // Boutique
  boutiqueId: number = 0; // Identifiant de la boutique
  produits: Produit[] = [];
  TotalProduits: Produit[] = [] // Liste des produits
  page: number = 1; // Page actuelle
  produitsParPage: number = 8; // Nombre de produits par page

  constructor(private route: ActivatedRoute, private produitService: ProduitService, private boutiqueService: BoutiqueService, 
    private imageService: ImageprocessingService
  ) {}

  ngOnInit() {
    this.getProduitsByBoutique();
  }
  favoris(productId: number, elementId: string): void {
    // Add the product to the list of favorites
    // This is just a placeholder. Replace with your actual implementation.
    console.log(`Product ${productId} added to favorites`);

    // Change the image source to indicate that the product is favorited
    let element = document.getElementById(elementId) as HTMLImageElement;
    element.src = "../../assets/images/likefilled_1.png";
  }
  precedent() {
    if (this.page > 1) {
      this.page--;
      this.getProduitsByBoutique();
    }
  }

  suivant() {
    this.page++;
    this.getProduitsByBoutique();
  }


  getProduitsByBoutique() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.boutiqueId = id;
    this.boutiqueService.getAllProduitsFromBoutique(id).pipe(
      map((produits: Produit[]) => produits.map(produit => this.imageService.createImages(produit)))
    ).subscribe(data => {
      const startIndex = (this.page - 1) * this.produitsParPage;
      const endIndex = this.page * this.produitsParPage;
      this.produits = data.slice(startIndex, endIndex);
      this.TotalProduits = data;
      console.log("Produits")
      console.log(this.produits);
    });
  }

  protected readonly HTMLElement = HTMLElement;
}
