import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-box',
  standalone: false,
  templateUrl: './quote-box.html',
  styleUrls: ['./quote-box.scss']
})
export class QuoteBox implements OnInit {
  quote: string = '';

  private readonly quotes: string[] = [
    `Non ho preventivi preformattati: <strong>il tuo preventivo lo costruiremo insieme</strong>. Sarà sicuramente migliore – sotto diversi punti di vista – rispetto ad altri. <br><em>Ah, tutto ovviamente senza alcun impegno!</em>`,
    
    `Ogni progetto è unico, proprio come il tuo codice. <br><strong>Niente preventivi copia-incolla</strong>: ci ragioniamo insieme e lo ottimizziamo come un buon algoritmo. <br><em>Ah, tutto questo senza nessun vincolo o costo iniziale!</em>`,
    
    `Non vendo pacchetti preconfezionati. <br>Prima <strong>capisco le tue esigenze</strong>, poi creiamo una soluzione su misura. <br><em>Spoiler: zero pressioni, zero impegno</em>, solo confronto sincero.`
  ];

  ngOnInit() {
    const index = Math.floor(Math.random() * this.quotes.length);
    this.quote = this.quotes[index];
  }
}
