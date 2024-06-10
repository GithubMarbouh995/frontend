import { Component, Input } from '@angular/core';
import { Boutique } from 'src/app/models/Boutique';
import { Router } from '@angular/router';


@Component({
  selector: 'app-boutique-card',
  templateUrl: './boutique-card.component.html',
  styleUrls: ['./boutique-card.component.css']
})
export class BoutiqueCardComponent {
  constructor(private router: Router) { };
  @Input() boutique: Boutique = new Boutique(0, '', '', '', '', '', '', {}, []);
}