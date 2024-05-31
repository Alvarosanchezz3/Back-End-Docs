import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringSecurityProyectoBaseComponent } from './spring-security-proyecto-base.component';

describe('SpringSecurityProyectoBaseComponent', () => {
  let component: SpringSecurityProyectoBaseComponent;
  let fixture: ComponentFixture<SpringSecurityProyectoBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpringSecurityProyectoBaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpringSecurityProyectoBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
