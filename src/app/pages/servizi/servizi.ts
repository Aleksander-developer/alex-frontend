import { Component } from '@angular/core';

interface Servizio {
  id: string;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-servizi',
  standalone: false,
  templateUrl: './servizi.html',
  styleUrls: ['./servizi.scss']
})
export class Servizi {
  servizi: Servizio[] = [
    {
      id: 'creazione-software',
      title: 'Creazione Software / Sito Web',
      description: 'Sviluppo di software su misura o siti web moderni, responsive e ottimizzati.',
      icon: 'code'
    },
    {
      id: 'manutenzione-software',
      title: 'Manutenzione Software / Sito Web',
      description: 'Aggiornamenti, bug fixing e supporto tecnico continuativo per le tue piattaforme.',
      icon: 'build'
    },
    {
      id: 'google-ads',
      title: 'Google Ads - PPC',
      description: 'Campagne pubblicitarie Pay-Per-Click su Google per aumentare visibilità e conversioni.',
      icon: 'trending_up'
    },
    {
      id: 'seo',
      title: 'SEO',
      description: 'Ottimizzazione dei contenuti e della struttura del sito per i motori di ricerca.',
      icon: 'search'
    },
    {
      id: 'realizzazione-progetto',
      title: 'Realizzazione Progetto',
      description: 'Supporto end-to-end: dall’idea alla pubblicazione finale del tuo progetto digitale.',
      icon: 'lightbulb'
    }
  ];

}
