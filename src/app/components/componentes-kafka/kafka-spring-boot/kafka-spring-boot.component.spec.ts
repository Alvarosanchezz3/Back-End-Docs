import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KafkaSpringBootComponent } from './kafka-spring-boot.component';

describe('KafkaSpringBootComponent', () => {
  let component: KafkaSpringBootComponent;
  let fixture: ComponentFixture<KafkaSpringBootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KafkaSpringBootComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KafkaSpringBootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
