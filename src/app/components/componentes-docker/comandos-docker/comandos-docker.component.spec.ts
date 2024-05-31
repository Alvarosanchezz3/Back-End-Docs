import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandosDockerComponent } from './comandos-docker.component';

describe('ComandosDockerComponent', () => {
  let component: ComandosDockerComponent;
  let fixture: ComponentFixture<ComandosDockerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComandosDockerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComandosDockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
