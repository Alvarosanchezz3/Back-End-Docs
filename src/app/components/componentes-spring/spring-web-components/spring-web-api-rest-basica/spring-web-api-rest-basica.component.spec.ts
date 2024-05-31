import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringWebApiRestBasicaComponent } from './spring-web-api-rest-basica.component';

describe('SpringWebApiRestBasicaComponent', () => {
  let component: SpringWebApiRestBasicaComponent;
  let fixture: ComponentFixture<SpringWebApiRestBasicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpringWebApiRestBasicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpringWebApiRestBasicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
