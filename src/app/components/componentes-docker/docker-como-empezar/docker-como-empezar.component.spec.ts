import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerComoEmpezarComponent } from './docker-como-empezar.component';

describe('DockerComoEmpezarComponent', () => {
  let component: DockerComoEmpezarComponent;
  let fixture: ComponentFixture<DockerComoEmpezarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DockerComoEmpezarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DockerComoEmpezarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
