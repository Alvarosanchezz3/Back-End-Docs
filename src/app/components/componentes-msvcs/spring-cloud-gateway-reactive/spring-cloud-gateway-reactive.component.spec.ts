import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringCloudGatewayReactiveComponent } from './spring-cloud-gateway-reactive.component';

describe('SpringCloudGatewayReactiveComponent', () => {
  let component: SpringCloudGatewayReactiveComponent;
  let fixture: ComponentFixture<SpringCloudGatewayReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpringCloudGatewayReactiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpringCloudGatewayReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
