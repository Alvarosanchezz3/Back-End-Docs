import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-eureka-server',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './eureka-server.component.html',
  styleUrls: ['./eureka-server.component.css', 'eureka-server-media-queries.css']
})
export class EurekaServerComponent {

}
