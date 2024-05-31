import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsCrearCuentaComponent } from './aws-crear-cuenta.component';

describe('AwsCrearCuentaComponent', () => {
  let component: AwsCrearCuentaComponent;
  let fixture: ComponentFixture<AwsCrearCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwsCrearCuentaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AwsCrearCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
