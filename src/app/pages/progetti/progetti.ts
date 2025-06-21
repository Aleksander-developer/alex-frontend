import { Component, OnInit } from '@angular/core';
import { Progetto, ProgettoService } from '../../shared/services/progetto.service';

@Component({
  selector: 'app-progetti',
  standalone: false,
  templateUrl: './progetti.html',
  styleUrls: ['./progetti.scss']
})
export class Progetti implements OnInit {
  progetti: Progetto[] = [];
  loading = true;
  errore = '';

  constructor(private progettoService: ProgettoService) {}

  ngOnInit(): void {
    this.progettoService.getProgetti().subscribe({
      next: (data) => {
        this.progetti = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Errore caricamento progetti:', err);
        this.errore = 'Errore nel caricamento dei progetti.';
        this.loading = false;
      }
    });
  }
}
