import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacionPersonalizadaComponent } from './validacion-personalizada.component';

describe('ValidacionPersonalizadaComponent', () => {
  let component: ValidacionPersonalizadaComponent;
  let fixture: ComponentFixture<ValidacionPersonalizadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidacionPersonalizadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidacionPersonalizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
