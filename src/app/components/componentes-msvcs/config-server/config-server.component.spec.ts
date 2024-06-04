import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigServerComponent } from './config-server.component';

describe('ConfigServerComponent', () => {
  let component: ConfigServerComponent;
  let fixture: ComponentFixture<ConfigServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigServerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
