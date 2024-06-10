import { FileHandle } from './FileHandle';
import { Vendeur } from 'src/lvt-api/src/models/vendeur';
export class Boutique {
  id: any;
  nom: string;
  adresse: string;
  telephone: string;
  email: string;
  siteweb: string;
  horaire: string;
  vendeur: Vendeur={};
  images : FileHandle[];

  constructor(id: number, nom: string, adresse: string, telephone: string, email: string, siteWeb: string, horaire: string, vendeur: Vendeur, boutiqueImage : FileHandle[]) {
    this.id = id;
    this.nom = nom;
    this.adresse = adresse;
    this.telephone = telephone;
    this.email = email;
    this.siteweb = siteWeb;
    this.horaire = horaire;
    this.images = boutiqueImage;
    this.vendeur = vendeur;
  }
}
