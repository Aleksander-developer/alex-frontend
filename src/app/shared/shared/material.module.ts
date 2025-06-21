import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    RouterModule,
    LayoutModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    
    MatDividerModule,
    
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    RouterModule,
    LayoutModule,
    MatChipsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatDividerModule,
  ]
})
export class MaterialModule {}
