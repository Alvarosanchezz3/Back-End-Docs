import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KafkaIniciarServidorComponent } from './kafka-iniciar-servidor.component';

describe('KafkaIniciarServidorComponent', () => {
  let component: KafkaIniciarServidorComponent;
  let fixture: ComponentFixture<KafkaIniciarServidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KafkaIniciarServidorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KafkaIniciarServidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
