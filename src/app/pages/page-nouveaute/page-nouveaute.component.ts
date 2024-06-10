import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/lvt-api/src/models/produit';
import { ImageprocessingService } from '../../services/imageprocessing.service';
import { map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../../services/produit.service';

@Component({
  selector: 'app-page-nouveaute',
  templateUrl: './page-nouveaute.component.html',
  styleUrls: ['./page-nouveaute.component.css']
})
export class PageNouveauteComponent implements OnInit {
  produits: Produit[] = [];
  TotalProduits: Produit[] = [] // Liste des produits
  page: number = 1; // Page actuelle
  produitsParPage: number = 8; 
  constructor(private route: ActivatedRoute, private produitService: ProduitService, private imageService: ImageprocessingService) { }

  ngOnInit(): void {
    this.getProduitsRecents();
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
      this.getProduitsRecents();
    }
  }

  suivant() {
    this.page++;
    this.getProduitsRecents();
  }

  getProduitsRecents() {
    this.produitService.produitRecent().pipe(
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

  ProduitRecent(){
    this.produitService.produitRecent().pipe(
      map((produits: Produit | Produit[]) => {
        if (Array.isArray(produits)) {
          return produits.map(produit => this.imageService.createImages(produit));
        } else {
          return [this.imageService.createImages(produits)];
        }
      })
    ).subscribe(data => {
      this.produits = data;
      console.log("Produits");
      console.log(this.produits);
    }, error => {
      console.error("Error fetching produit:", error);
    });
  }

}
