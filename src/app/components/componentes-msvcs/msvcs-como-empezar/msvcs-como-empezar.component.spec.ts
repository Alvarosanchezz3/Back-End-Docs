import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsvcsComoEmpezarComponent } from './msvcs-como-empezar.component';

describe('MsvcsComoEmpezarComponent', () => {
  let component: MsvcsComoEmpezarComponent;
  let fixture: ComponentFixture<MsvcsComoEmpezarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MsvcsComoEmpezarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MsvcsComoEmpezarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
