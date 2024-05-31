import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringSecurityAutorizacionComponent } from './spring-security-autorizacion.component';

describe('SpringSecurityAutorizacionComponent', () => {
  let component: SpringSecurityAutorizacionComponent;
  let fixture: ComponentFixture<SpringSecurityAutorizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpringSecurityAutorizacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpringSecurityAutorizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
