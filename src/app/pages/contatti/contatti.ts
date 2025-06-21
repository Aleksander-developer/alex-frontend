import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contatti',
  standalone: false,
  templateUrl: './contatti.html',
  styleUrls: ['./contatti.scss']
})

export class Contatti {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.contactForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      cellulare: ['', [Validators.pattern(/^(\+?\d{1,3}[- ]?)?\d{6,14}$/)]],
      messaggio: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Messaggio inviato:', this.contactForm.value);
      this.snackBar.open('Messaggio inviato con successo!', 'Chiudi', { duration: 4000 });
      this.contactForm.reset();
    }
  }
}