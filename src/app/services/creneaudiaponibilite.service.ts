import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreneauDisponibiliteService {
  private apiUrl = 'backend-production-fdc5.up.railway.app'; // Replace with your API's URL

  constructor(private http: HttpClient) { }

  ajouterCreneauProduit(creneauDisponibilite: any, id_produit: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/creneauDisponibilite/produit/${id_produit}`, creneauDisponibilite);
  }

  ajouterCreneau(creneauDisponibilite: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/creneauDisponibilite`, creneauDisponibilite);
  }
}
