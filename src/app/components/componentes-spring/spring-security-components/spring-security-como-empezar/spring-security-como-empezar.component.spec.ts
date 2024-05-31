import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringSecurityComoEmpezarComponent } from './spring-security-como-empezar.component';

describe('SpringSecurityComoEmpezarComponent', () => {
  let component: SpringSecurityComoEmpezarComponent;
  let fixture: ComponentFixture<SpringSecurityComoEmpezarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpringSecurityComoEmpezarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpringSecurityComoEmpezarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
