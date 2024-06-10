import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  private apiUrl = 'http://localhost:8081'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  ajouterCatalogue(catalogue: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/catalogue`, catalogue);
  }

  getAllCatalogues(): Observable<any> {
    return this.http.get(`${this.apiUrl}/catalogue`);
  }

  supprimerCatalogue(id_catalogue: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/catalogue/${id_catalogue}`);
  }

  ajouterProduitToCatalogue(id_catalogue: number, id_produit: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/catalogue/${id_catalogue}/produit/${id_produit}`, {});
  }

  getAllProduitsFromCatalogue(id_catalogue: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/catalogue/${id_catalogue}/produits`);
  }
}
