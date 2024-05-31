import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerComposeComponent } from './docker-compose.component';

describe('DockerComposeComponent', () => {
  let component: DockerComposeComponent;
  let fixture: ComponentFixture<DockerComposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DockerComposeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DockerComposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
