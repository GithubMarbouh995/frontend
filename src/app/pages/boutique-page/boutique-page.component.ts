import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Boutique } from 'src/lvt-api/src/models/boutique';
import { BoutiqueService } from 'src/app/services/boutique.service';
import { ImageprocessingService } from '../../services/imageprocessing.service';


@Component({
  selector: 'app-boutique-page',
  templateUrl: './boutique-page.component.html',
  styleUrls: ['./boutique-page.component.css']
})
export class BoutiquePageComponent {
  constructor(private boutiqueService: BoutiqueService, private imageService: ImageprocessingService) { };
  boutiques: Boutique[] = [];
  page: number = 1; // Page actuelle
  boutiquesParPage: number = 8;
  TotalBoutiques: Boutique[] = [];

  ngOnInit() {
    this.getAllBoutiques();

  }
  getAllBoutiques() {
    this.boutiqueService.findAll().pipe(
      map((boutiques: Boutique[]) => boutiques.map(boutique => this.imageService.createImagesBoutique(boutique)))
    ).subscribe(data => {
      const startIndex = (this.page - 1) * this.boutiquesParPage;
      const endIndex = this.page * this.boutiquesParPage;
      this.boutiques = data.slice(startIndex, endIndex);
      this.TotalBoutiques = data;
      console.log("Boutiques")
      console.log(this.boutiques);
    });
  }
  precedent() {
    if (this.page > 1) {
      this.page--;
      this.getAllBoutiques();
    }
  }

  suivant() {
    this.page++;
    this.getAllBoutiques();
  }

  protected readonly HTMLElement = HTMLElement;
}
