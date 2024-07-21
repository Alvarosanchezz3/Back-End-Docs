import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KafkaComoEmpezarComponent } from './kafka-como-empezar.component';

describe('KafkaComoEmpezarComponent', () => {
  let component: KafkaComoEmpezarComponent;
  let fixture: ComponentFixture<KafkaComoEmpezarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KafkaComoEmpezarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KafkaComoEmpezarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
