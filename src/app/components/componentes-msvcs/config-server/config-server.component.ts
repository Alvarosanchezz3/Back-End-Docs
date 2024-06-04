import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-config-server',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './config-server.component.html',
  styleUrl: './config-server.component.css'
})
export class ConfigServerComponent {

}
