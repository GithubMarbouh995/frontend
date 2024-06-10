import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from '../models/Location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiUrl = 'http://localhost:8081'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/location`);
  }

  findById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/location/${id}`);
  }

  saveOrUpdate(location: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/location/create`, location);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/location/delete/${id}`);
  }

  verify(id: number, datedebut: String, datefin: String): Observable<any> {
    return this.http.get(`${this.apiUrl}/location/verify?produit_id=${id}&datedebut=${datedebut}&datefin=${datefin}`);
  }
  verify_2(id: number, datedebut: String, datefin: String): Observable<any> {
    return this.http.get(`${this.apiUrl}/location/verify_2?produit_id=${id}&datedebut=${datedebut}&datefin=${datefin}`);
  }
  getByClient(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/location/client/${id}`);
  }
  getNotAccepted(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/location/attente/${id}`);
  }
  update(location: Location): Observable<any> {
    return this.http.put(`${this.apiUrl}/location/update`, location);
  }
}
