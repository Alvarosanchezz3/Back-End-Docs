import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringSecurityCorsComponent } from './spring-security-cors.component';

describe('SpringSecurityCorsComponent', () => {
  let component: SpringSecurityCorsComponent;
  let fixture: ComponentFixture<SpringSecurityCorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpringSecurityCorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpringSecurityCorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
