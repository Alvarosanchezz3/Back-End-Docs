import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-config-server',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './config-server.component.html',
  styleUrls: ['./config-server.component.css', 'config-server-media-queries.css']
})
export class ConfigServerComponent {

}
