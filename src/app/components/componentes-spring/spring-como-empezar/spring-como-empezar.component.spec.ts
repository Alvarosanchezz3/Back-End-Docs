import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringComoEmpezarComponent } from './spring-como-empezar.component';

describe('SpringComoEmpezarComponent', () => {
  let component: SpringComoEmpezarComponent;
  let fixture: ComponentFixture<SpringComoEmpezarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpringComoEmpezarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpringComoEmpezarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
