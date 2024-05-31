import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./home-banner.css', './home-media-queries.css'],
})
export class HomeComponent {
  
  constructor(private router: Router) { }
  
  palabras: string[] = ['eficiente', 'rápida']; // Lista de palabras a mostrar
  palabraActual: string = 'fácil'; // Palabra actual
  indice: number = 0;
  intervaloLetras = 300; // Intervalo en milisegundos (por ejemplo, 0.1 segundos) entre cada letra
  intervaloPalabras = 3000; // Intervalo en milisegundos (por ejemplo, 1 segundo) entre cada palabra
  palabraVisible: string = '';
  escribiendo: boolean = true;

  ngOnInit() {
    interval(this.intervaloLetras).subscribe(() => {
      if (this.escribiendo) {
        if (this.palabraVisible.length < this.palabraActual.length) {
          // Agregar la siguiente letra a la palabra visible
          this.palabraVisible += this.palabraActual[this.palabraVisible.length];
        } else {
          // Ya se escribió completamente la palabra, comenzar a borrarla
          this.escribiendo = false;
        }
      } else {
        if (this.palabraVisible.length > 0) {
          // Borrar una letra de la palabra visible
          this.palabraVisible = this.palabraVisible.slice(0, -1);
        } else {
          // Cambiar a la siguiente palabra y reiniciar la escritura
          this.indice = (this.indice + 1) % this.palabras.length;
          this.palabraActual = this.palabras[this.indice];
          this.escribiendo = true;
        }
      }
    });
  }

  navigate(ruta: string): void {
    this.router.navigateByUrl(ruta);
  }
}
