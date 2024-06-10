/* tslint:disable */
import { AdresseDto } from './adresse-dto';
export interface RegisterRequest  {
  adresse?: AdresseDto;
  email?: string;
  id?: number;
  moteDePasse?: string;
  nom?: string;
  prenom?: string;
  role?: 'USER' | 'ADMIN' | 'MANAGER';
  telephone?: string;
}
