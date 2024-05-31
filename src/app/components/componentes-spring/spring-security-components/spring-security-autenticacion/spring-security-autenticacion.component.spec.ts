import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringSecurityAutenticacionComponent } from './spring-security-autenticacion.component';

describe('SpringSecurityAutenticacionComponent', () => {
  let component: SpringSecurityAutenticacionComponent;
  let fixture: ComponentFixture<SpringSecurityAutenticacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpringSecurityAutenticacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpringSecurityAutenticacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
