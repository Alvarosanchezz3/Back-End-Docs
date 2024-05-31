import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-validacion-personalizada',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './validacion-personalizada.component.html',
  styleUrls: ['./validacion-personalizada.component.css', 'validacion-personalizada-media-queries.css']
})
export class ValidacionPersonalizadaComponent {

}
