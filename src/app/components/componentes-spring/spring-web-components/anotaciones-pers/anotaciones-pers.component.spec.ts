import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotacionesPersComponent } from './anotaciones-pers.component';

describe('AnotacionesPersComponent', () => {
  let component: AnotacionesPersComponent;
  let fixture: ComponentFixture<AnotacionesPersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnotacionesPersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnotacionesPersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
