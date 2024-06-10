import { Client, Produit, Utilisateur } from 'src/lvt-api/src/models';
export interface Reservation{
    id: number;
    date: Date;
    produit: Produit;
    client: Utilisateur;
    accepted: boolean;
} 