import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenFeignComponent } from './open-feign.component';

describe('OpenFeignComponent', () => {
  let component: OpenFeignComponent;
  let fixture: ComponentFixture<OpenFeignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenFeignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenFeignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
