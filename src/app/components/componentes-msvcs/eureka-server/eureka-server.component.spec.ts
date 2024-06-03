import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EurekaServerComponent } from './eureka-server.component';

describe('EurekaServerComponent', () => {
  let component: EurekaServerComponent;
  let fixture: ComponentFixture<EurekaServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EurekaServerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EurekaServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
