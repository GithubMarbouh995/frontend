import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../../services/produit.service';
import { BoutiqueService } from '../../services/boutique.service';
import { Produit } from 'src/lvt-api/src/models/produit';
import { Boutique } from 'src/app/models/Boutique';
import { ImageprocessingService } from '../../services/imageprocessing.service';
import { map } from 'rxjs';
@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {

  produit : Produit[]  = [];
  suggestions : Produit[] = [];
  produitId: number = 0;
  id?: string;

  constructor(private route: ActivatedRoute, private produitService: ProduitService, private imageService: ImageprocessingService
  ) {}

  favoris(productId: number, elementId: string): void {
    // Add the product to the list of favorites
    // This is just a placeholder. Replace with your actual implementation.
    console.log(`Product ${productId} added to favorites`);

    // Change the image source to indicate that the product is favorited
    let element = document.getElementById(elementId) as HTMLImageElement;
    element.src = "../../assets/images/likefilled_1.png";
  }

  ngOnInit(): void {
    this.getProduit();
    this.getSuggestions();
  }
  
  getProduit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produitId = id;
    this.produitService.getProduit(id).pipe(
      map((produits: Produit | Produit[]) => {
        if (Array.isArray(produits)) {
          return produits.map(produit => this.imageService.createImages(produit));
        } else {
          return [this.imageService.createImages(produits)];
        }
      })
    ).subscribe(data => {
      this.produit = data;
      console.log("Produits");
      console.log(this.produit);
    }, error => {
      console.error("Error fetching produit:", error);
    });
  }

  getSuggestions() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produitService.getSuggestions(id).pipe(
      map((produits: Produit | Produit[]) => {
        if (Array.isArray(produits)) {
          return produits.map(produit => this.imageService.createImages(produit));
        } else {
          return [this.imageService.createImages(produits)];
        }
      })
    ).subscribe(data => {
      this.suggestions = data;
      console.log("Produits");
      console.log(this.suggestions);
    }, error => {
      console.error("Error fetching produit:", error);
    });

  }
  
  protected readonly HTMLElement = HTMLElement;
}
