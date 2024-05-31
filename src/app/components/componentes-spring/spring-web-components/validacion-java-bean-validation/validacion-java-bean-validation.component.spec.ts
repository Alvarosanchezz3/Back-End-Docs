import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacionJavaBeanValidationComponent } from './validacion-java-bean-validation.component';

describe('ValidacionJavaBeanValidationComponent', () => {
  let component: ValidacionJavaBeanValidationComponent;
  let fixture: ComponentFixture<ValidacionJavaBeanValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidacionJavaBeanValidationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidacionJavaBeanValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
