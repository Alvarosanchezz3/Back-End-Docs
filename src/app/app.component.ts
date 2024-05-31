import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isFixedHeader();
      }
    });
  }

  fixed: boolean = true;

  isFixedHeader() {
    // Verifica la ruta actual
    let currentRoute = this.router.url;

    // Si la ruta es /home el header no será fijo
    if (currentRoute === "/home") {
      this.fixed = false;
    } else {
      this.fixed = true;
    }
  }
}