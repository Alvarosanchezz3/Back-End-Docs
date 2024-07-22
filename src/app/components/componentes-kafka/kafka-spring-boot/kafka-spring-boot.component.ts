import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-kafka-spring-boot',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './kafka-spring-boot.component.html',
  styleUrls: ['./kafka-spring-boot.component.css', 'kafka-spring-boot-media-queries.css']
})
export class KafkaSpringBootComponent {

}
