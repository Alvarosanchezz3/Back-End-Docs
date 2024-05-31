import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S3CreacionProyectoComponent } from './s3-creacion-proyecto.component';

describe('S3CreacionProyectoComponent', () => {
  let component: S3CreacionProyectoComponent;
  let fixture: ComponentFixture<S3CreacionProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [S3CreacionProyectoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(S3CreacionProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
