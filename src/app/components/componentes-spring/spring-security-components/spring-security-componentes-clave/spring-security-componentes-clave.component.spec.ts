import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringSecurityComponentesClaveComponent } from './spring-security-componentes-clave.component';

describe('SpringSecurityComponentesClaveComponent', () => {
  let component: SpringSecurityComponentesClaveComponent;
  let fixture: ComponentFixture<SpringSecurityComponentesClaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpringSecurityComponentesClaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpringSecurityComponentesClaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
