import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-s3-creacion-proyecto',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './s3-creacion-proyecto.component.html',
  styleUrls: ['./s3-creacion-proyecto.component.css', 's3-creacion-proyecto-media-queries.css']
})
export class S3CreacionProyectoComponent {
  currentSlide = 0;
  totalSlides = 7;

  previousSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  nextSlide() {
    if (this.currentSlide < this.totalSlides - 1) {
      this.currentSlide++;
    }
  }
}

