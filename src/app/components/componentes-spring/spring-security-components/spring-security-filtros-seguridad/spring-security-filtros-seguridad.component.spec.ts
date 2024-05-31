import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringSecurityFiltrosSeguridadComponent } from './spring-security-filtros-seguridad.component';

describe('SpringSecurityFiltrosSeguridadComponent', () => {
  let component: SpringSecurityFiltrosSeguridadComponent;
  let fixture: ComponentFixture<SpringSecurityFiltrosSeguridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpringSecurityFiltrosSeguridadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpringSecurityFiltrosSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
