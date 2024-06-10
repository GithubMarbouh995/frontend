import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../../lvt-api/src/models/produit';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private apiUrl = 'http://localhost:8081/api/produits';

  constructor(private http: HttpClient) { }

  ajouterProduit(produit: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/ajouterProduit`, produit);
  }

  getAllProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.apiUrl}/getAllProduits`);
  }

  supprimerProduit(id_produit: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/supprimerProduit/${id_produit}`);
  }

  updateProduit( produit: FormData): Observable<Produit> {
    return this.http.put<Produit>(`${this.apiUrl}/updateProduit`, produit);
  }

  getProduitsDispoPourCreneau(id_creneau: number): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.apiUrl}/getProduitsDispoPourCreneau/${id_creneau}`);
  }

  getCreneauxPourProduit(id_produit: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/getCreneauxPourProduit/${id_produit}`);
  }

  getProduit(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/getProduit/${id}`);
  }

  getSuggestions(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/getSuggestions/${id}`);
  }

  searchProduit(mot : string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search?mot=${mot}`);
  }
  produitRecent(): Observable<any> {
    return this.http.get(`${this.apiUrl}/récent`);
  }
  
}
