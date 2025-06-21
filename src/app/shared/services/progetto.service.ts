// src/app/shared/services/progetto.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

// Modello dell'interfaccia progetto (puoi personalizzarla meglio)
export interface Progetto {
  _id: string;
  titolo: string;
  descrizione: string;
  tecnologie: string[];
  immagineUrl: string;
  linkGitHub?: string;
  linkDemo?: string;
  // Aggiungi altri campi se servono
}

@Injectable({
  providedIn: 'root'
})
export class ProgettoService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProgetti(): Observable<Progetto[]> {
    return this.http.get<Progetto[]>(this.apiUrl);
  }

  getProgettoById(id: string): Observable<Progetto> {
    return this.http.get<Progetto>(`${this.apiUrl}/${id}`);
  }

  // (Facoltativi per dopo) Crea, aggiorna, elimina
  // createProgetto(data: Partial<Progetto>): Observable<Progetto> { ... }
  // updateProgetto(id: string, data: Partial<Progetto>): Observable<Progetto> { ... }
  // deleteProgetto(id: string): Observable<void> { ... }
}
