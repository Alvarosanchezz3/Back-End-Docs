import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-imagenes',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css', 'imagenes-media-queries.css']
})
export class ImagenesComponent {

}
