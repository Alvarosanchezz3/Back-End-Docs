import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-docker-compose',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './docker-compose.component.html',
  styleUrl: './docker-compose.component.css'
})
export class DockerComposeComponent {

}
