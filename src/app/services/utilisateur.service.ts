import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from 'src/lvt-api/src/models';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private apiUrl = 'backend-production-fdc5.up.railway.app'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  save(dto: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/utilisateur`, dto);
  }

  findById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/utilisateur/${id}`);
  }

  findAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/utilisateur`);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/utilisateur/${id}`);
  }

  findByEmail(email: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/utilisateur/email/${email}`);
  }

  update(utilisateur: Utilisateur): Observable<any> {
    return this.http.put(`${this.apiUrl}/user/update`, utilisateur);
  }
  deleteClient(id:number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/user/client/delete/${id}`);
  }
  getClients(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/clients`);
  }
}
