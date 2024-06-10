import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../models/Reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://localhost:8081/'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}reservation`);
  }

  findById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}reservation/${id}`);
  }

  saveOrUpdate(location: any): Observable<any> {
    return this.http.post(`${this.apiUrl}reservation/create`, location);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}reservation/delete/${id}`);
  }

  verify(id: number, date: String): Observable<any> {
    return this.http.get(`${this.apiUrl}reservation/verify?produit_id=${id}&date=${date}`);
  }

  verify_2(id: number, date: String): Observable<any> {
    return this.http.get(`${this.apiUrl}reservation/verify_2?produit_id=${id}&date=${date}`);
  }
  getByClient(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}reservation/client/${id}`);
  }
  getNotAccepted(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}reservation/attente/${id}`);
  }
  update(reservation: Reservation): Observable<any> {
    return this.http.put(`${this.apiUrl}reservation/update`, reservation);
  }
}
