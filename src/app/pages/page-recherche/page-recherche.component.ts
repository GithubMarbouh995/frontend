import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/lvt-api/src/models';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../../services/produit.service';
import { BoutiqueService } from '../../services/boutique.service';
import { ImageprocessingService } from '../../services/imageprocessing.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-page-recherche',
  templateUrl: './page-recherche.component.html',
  styleUrls: ['./page-recherche.component.css']
})
export class PageRechercheComponent implements OnInit {

  produits: Produit[] = []
  mot = "";
  TotalProduits: Produit[] = [] // Liste des produits
  page: number = 1; // Page actuelle
  produitsParPage: number = 8;


 constructor(private route: ActivatedRoute, private produitService: ProduitService, private imageService: ImageprocessingService) {}

  ngOnInit(): void {
  }

  search(mot: string) {
    this.mot = mot;
    this.produits = [];
    this.searchProduit(mot);
  }

  precedent() {
    if (this.page > 1) {
      this.page--;
      this.searchProduit(this.mot);
    }
  }

  suivant() {
    this.page++;
    this.searchProduit(this.mot);
  }
  
  searchProduit(mot: string) {
    this.produitService.searchProduit(mot).pipe(
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
