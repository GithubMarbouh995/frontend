import { Component, ElementRef, ViewChild,OnInit } from '@angular/core';
import { Utilisateur } from 'src/lvt-api/src/models';
import  {AuthenticationService} from 'src/app/services/authentication.service';
import { Adresse } from 'src/lvt-api/src/models';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  client : Utilisateur  = {
    adresse: {
      codePostale: '',
      adresse1: '',
      ville: '',
    }
  };
  clientId: number = 0;
  Adresse : Adresse = {};
 constructor(private authService: AuthenticationService, private utilisateurService: UtilisateurService) { }

ngOnInit(): void {
  this.getIdClient();
    
}

getUtilisateur(){
  this.authService.finbyId(this.clientId).subscribe(
    (data: Utilisateur) => {
      this.client = data;
      console.log(data);
    },
    (error) => {
      console.log(error);
    }
  );
}

confirmer(){
  console.log(this.client);
  this.utilisateurService.update(this.client).subscribe(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.log(error);
    }
  );
}

getIdClient() {
  const email= localStorage.getItem('auth') || '';
  this.authService.getId(email).subscribe(
    data => {
      this.clientId = data;
      this.getUtilisateur();
    }
  );
}


}
