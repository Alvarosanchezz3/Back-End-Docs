import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isFixedHeader();
      }
    });
  }

  /* Al navegar entre pantallas se hace un scroll hacía arriba para que se vea desde el 
   * principio la nueva pantalla y no desde donde estaba al darle */
  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
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