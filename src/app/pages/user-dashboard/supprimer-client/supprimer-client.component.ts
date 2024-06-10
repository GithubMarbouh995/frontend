import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { Client } from 'src/lvt-api/src/models';

@Component({
  selector: 'app-supprimer-client',
  templateUrl: './supprimer-client.component.html',
  styleUrls: ['./supprimer-client.component.css']
})
export class SupprimerClientComponent implements OnInit {
  clients: Client[]=[];

  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.getClient();
  }


  getClient(){
    this.utilisateurService.getClients().subscribe(
      data=>{
        this.clients = data;
        console.log(data);
      }
    )
  }

  deleteClient(id: any){
    this.utilisateurService.deleteClient(id).subscribe(
      data=>{
        console.log(data);
        this.getClient();
      }
    )
  }
}
