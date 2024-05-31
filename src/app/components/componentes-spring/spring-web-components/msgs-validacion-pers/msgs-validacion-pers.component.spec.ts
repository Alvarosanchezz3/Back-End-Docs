import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgsValidacionPersComponent } from './msgs-validacion-pers.component';

describe('MsgsValidacionPersComponent', () => {
  let component: MsgsValidacionPersComponent;
  let fixture: ComponentFixture<MsgsValidacionPersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MsgsValidacionPersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MsgsValidacionPersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
