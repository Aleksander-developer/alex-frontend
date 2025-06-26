// src/app/shared/services/progetto.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Progetto {
  _id: string;
  titolo: string;
  descrizione: string;
  tecnologie: string[];
  immagineUrl: string;
  linkGitHub?: string;
  linkDemo?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProgettoService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProgetti(): Observable<Progetto[]> {
    return this.http.get<Progetto[]>(`${this.apiUrl}/progetti`);
  }

  getProgettoById(id: string): Observable<Progetto> {
    return this.http.get<Progetto>(`${this.apiUrl}/progetti/${id}`);
  }

  // Per futura estensione (facoltativi)
  // createProgetto(data: Partial<Progetto>): Observable<Progetto> {
  //   return this.http.post<Progetto>(`${this.apiUrl}/progetti`, data);
  // }

  // updateProgetto(id: string, data: Partial<Progetto>): Observable<Progetto> {
  //   return this.http.put<Progetto>(`${this.apiUrl}/progetti/${id}`, data);
  // }

  // deleteProgetto(id: string): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/progetti/${id}`);
  // }
}
