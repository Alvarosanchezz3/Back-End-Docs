import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-spring-security-autenticacion',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './spring-security-autenticacion.component.html',
  styleUrls: ['./spring-security-autenticacion.component.css', 'spring-security-autenticacion-media-queries.css']
})
export class SpringSecurityAutenticacionComponent {

  currentInfo: string = 'info1';

  toggleInfo() {
    this.currentInfo = this.currentInfo === 'info1' ? 'info2' : 'info1';
    window.scrollTo(0, 0);
  }
}
