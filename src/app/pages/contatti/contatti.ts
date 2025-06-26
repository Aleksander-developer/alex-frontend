// contatti.ts
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contatti',
  standalone: false,
  templateUrl: './contatti.html',
  styleUrls: ['./contatti.scss']
})

export class Contatti {
  contactForm: FormGroup;
  successMessage: string = '';  // aggiunto

  constructor(private fb: FormBuilder, 
    private snackBar: MatSnackBar,
  private http: HttpClient ) {
    this.contactForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      cellulare: ['', [Validators.pattern(/^(\+?\d{1,3}[- ]?)?\d{6,14}$/)]],
      messaggio: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
  if (this.contactForm.valid) {
    const formData = this.contactForm.value;

    this.http.post(`${environment.apiUrl}/contatti`, formData).subscribe({
      next: () => {
        this.successMessage = 'Messaggio inviato con successo!';
        this.contactForm.reset();
        this.contactForm.markAsPristine();
        this.contactForm.markAsUntouched();
        setTimeout(() => this.successMessage = '', 5000);
      },
      error: () => {
        this.snackBar.open('Errore durante l\'invio. Riprova.', 'Chiudi', { duration: 5000 });
      }
    });
  }
}

}