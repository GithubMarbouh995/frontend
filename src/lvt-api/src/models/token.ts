/* tslint:disable */
import { Utilisateur } from './utilisateur';
export interface Token  {
  expired?: boolean;
  id?: number;
  revoked?: boolean;
  token?: string;
  tokenType?: 'BEARER';
  user?: Utilisateur;
}
