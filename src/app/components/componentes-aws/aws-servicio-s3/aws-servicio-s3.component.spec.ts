import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsServicioS3Component } from './aws-servicio-s3.component';

describe('AwsServicioS3Component', () => {
  let component: AwsServicioS3Component;
  let fixture: ComponentFixture<AwsServicioS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwsServicioS3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AwsServicioS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
