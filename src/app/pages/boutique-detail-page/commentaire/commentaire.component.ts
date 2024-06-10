import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AvisService } from 'src/app/services/avis.service';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit{
  commentaire: string = '';
  @Input() id_boutique: number = 0;
  id_client: number = 0;

  constructor(private authService : AuthenticationService, private avisService: AvisService) {}
  ngOnInit() {
    this.getClientId();
  }

  getClientId() {
    this.authService.getId(localStorage.getItem('auth') || '').subscribe(
      data => {
        this.id_client = data;
      }
    );
  }

  ajouterCommentaire() {
    this.avisService.createAvis(this.commentaire, this.id_boutique, this.id_client).subscribe(
      data => {
        console.log(data);
      }
    );
  }
}
