import { FileHandle } from 'src/app/models/FileHandle';
import { Vendeur } from 'src/lvt-api/src/models/vendeur';
export interface Boutique {
  id: any;
  nom: string;
  adresse: string;
  telephone: string;
  email: string;
  siteweb: string;
  horaire: string;
  vendeur: Vendeur;
  images : FileHandle[];

}