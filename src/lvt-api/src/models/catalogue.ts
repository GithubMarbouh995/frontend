/* tslint:disable */
import { Produit } from './produit';
export interface Catalogue  {
  creationDate?: number;
  description?: string;
  id?: number;
  lastModifiedDate?: number;
  nom?: string;
  produits?: Array<Produit>;
}
