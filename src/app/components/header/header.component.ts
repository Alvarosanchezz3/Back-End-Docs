import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './header-media-queries.css']
})
export class HeaderComponent {

  constructor(private router: Router) {}

  @Input() fixed: boolean | undefined;

  menuOpen: boolean = false;
  subMenuOpen: { [key: string]: boolean } = {
    spring: false,
    'spring-web': false,
    docker: false,
    aws: false,
    microservices: false,
    kafka: false
  };

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleSubMenu(menu: string) {
    this.subMenuOpen[menu] = !this.subMenuOpen[menu];
  }

  onLinkClick(event: Event, menu: string, ruta: string) {
    if (window.innerWidth <= 1070) {
      if (menu) {
        this.toggleSubMenu(menu);
      } else {
        this.router.navigateByUrl(ruta);
        this.closeMenu();
      }
    } else {
      this.router.navigateByUrl(ruta);
    }
  }

  closeMenu() {
    this.menuOpen = false;
    Object.keys(this.subMenuOpen).forEach(key => this.subMenuOpen[key] = false);
  }
}