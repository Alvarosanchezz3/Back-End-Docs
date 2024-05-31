import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringWebComoEmpezarComponent } from './spring-web-como-empezar.component';

describe('SpringWebComoEmpezarComponent', () => {
  let component: SpringWebComoEmpezarComponent;
  let fixture: ComponentFixture<SpringWebComoEmpezarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpringWebComoEmpezarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpringWebComoEmpezarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
