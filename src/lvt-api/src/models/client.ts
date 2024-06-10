/* tslint:disable */
import { Adresse } from './adresse';
import { GrantedAuthority } from './granted-authority';
import { Reservation } from 'src/app/models/Reservation';
import { Token } from './token';
export interface Client  {
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  adresse?: Adresse;
  authorities?: Array<GrantedAuthority>;
  creationDate?: number;
  credentialsNonExpired?: boolean;
  email?: string;
  enabled?: boolean;
  id?: number;
  lastModifiedDate?: number;
  motDePasse?: string;
  nom?: string;
  password?: string;
  prenom?: string;
  role?: 'USER' | 'ADMIN' | 'MANAGER';
  telephone?: string;
  tokens?: Array<Token>;
  username?: string;
  reservation?: Reservation[];
  location?: Location[];
}
