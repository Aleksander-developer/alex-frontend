import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class Footer {
  public currentYear: number = new Date().getFullYear();

  // constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
  //   iconRegistry.addSvgIcon(
  //     'instagram',
  //     sanitizer.bypassSecurityTrustResourceUrl('assets/icons/instagram.svg')
  //   );
  //   iconRegistry.addSvgIcon(
  //     'facebook',
  //     sanitizer.bypassSecurityTrustResourceUrl('assets/icons/facebook.svg')
  //   );
  //   iconRegistry.addSvgIcon(
  //     'whatsapp',
  //     sanitizer.bypassSecurityTrustResourceUrl('assets/icons/whatsapp.svg')
  //   );
  // }
}

