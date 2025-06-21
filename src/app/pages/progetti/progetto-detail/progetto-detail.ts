import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgettoService } from '../../../shared/services/progetto.service';

interface Progetto {
  _id: string;
  title: string;
  description: string;
  dettagli: string;
  image: string;
  techStack?: string[];
  liveUrl?: string;
  repoUrl?: string;
}

@Component({
  selector: 'app-progetto-detail',
  standalone: false,
  templateUrl: './progetto-detail.html',
  styleUrls: ['./progetto-detail.scss']
})
export class ProgettoDetail implements OnInit {
  progettoId!: string;
  progettoData?: Progetto;
  loading = true;
  errore = '';

  mockProgetti: Progetto[] = [
    {
      _id: 'portfolio-web-app',
      title: 'Portfolio Web App',
      description: 'Un portfolio moderno e responsive costruito con Angular e Material.',
      dettagli: `Questo progetto utilizza Angular 15, Material Design, 
                 TypeScript avanzato, ed è ottimizzato per performance e SEO.`,
      image: 'assets/images/projects/portfolio.png',
      techStack: ['Angular', 'TypeScript', 'Angular Material', 'SCSS'],
      liveUrl: 'https://tuo-sito.it/portfolio',
      repoUrl: 'https://github.com/tuo-username/portfolio-web-app'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private progettoService: ProgettoService
  ) {}

  ngOnInit(): void {
    this.progettoId = this.route.snapshot.paramMap.get('id') ?? '';

    this.progettoService.getProgettoById(this.progettoId).subscribe({
      next: (progetto) => {
        this.progettoData = this.mappaProgetto(progetto);
        this.loading = false;
      },
      error: (err) => {
        console.warn('⚠️ Errore caricamento da backend, uso dati mock:', err);
        this.progettoData = this.mockProgetti.find(p => p._id === this.progettoId);
        if (!this.progettoData) {
          this.errore = 'Progetto non trovato.';
        }
        this.loading = false;
      }
    });
  }

  private mappaProgetto(raw: any): Progetto {
    return {
      _id: raw._id,
      title: raw.title,
      description: raw.description,
      dettagli: raw.dettagli,
      image: raw.image,
      techStack: raw.techStack,
      liveUrl: raw.liveUrl,
      repoUrl: raw.repoUrl
    };
  }
}
