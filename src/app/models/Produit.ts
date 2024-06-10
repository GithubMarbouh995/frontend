import { FileHandle } from './FileHandle';

export class Produit {
    id: any;
    nom: string;
    categorie: string;
    prixLocation: string;
    id_boutique: number;
    id_catalogue: number;
    productImage : FileHandle[];
  
    constructor(id: number, nom: string, categorie: string, prixLocation: string, id_boutique: number, id_catalogue: number, productImage : FileHandle[]) {
      this.id = id;
      this.nom = nom;
      this.categorie = categorie;
      this.prixLocation = prixLocation;
      this.id_boutique = id_boutique;
      this.id_catalogue = id_catalogue;
      this.productImage = productImage;
    }
  }