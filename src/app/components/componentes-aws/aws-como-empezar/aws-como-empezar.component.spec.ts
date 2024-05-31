import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsComoEmpezarComponent } from './aws-como-empezar.component';

describe('AwsComoEmpezarComponent', () => {
  let component: AwsComoEmpezarComponent;
  let fixture: ComponentFixture<AwsComoEmpezarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwsComoEmpezarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AwsComoEmpezarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
