import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-contenedores',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './contenedores.component.html',
  styleUrls: ['./contenedores.component.css', 'contenedores-media-queries.css']
})
export class ContenedoresComponent {
  
}
