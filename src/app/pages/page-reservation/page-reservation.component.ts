import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../../services/produit.service';
import { CreneauDisponibilite } from 'src/lvt-api/src/models';


@Component({
  selector: 'app-page-reservation',
  templateUrl: './page-reservation.component.html',
  styleUrls: ['./page-reservation.component.css']
})
export class PageReservationComponent implements OnInit {
  id ?: number;
  creneau: CreneauDisponibilite[] = [];


  constructor(private route: ActivatedRoute, private produitService: ProduitService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.getCreneau();
  }

  getCreneau() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produitService.getCreneauxPourProduit(id).subscribe(data => {
      this.creneau = data;
      console.log("Creneau");
      console.log(this.creneau);
    });
  }

  

}
