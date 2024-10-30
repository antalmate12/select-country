import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketShipCardComponent } from './rocket-ship-card.component';

describe('RocketShipCardComponent', () => {
  let component: RocketShipCardComponent;
  let fixture: ComponentFixture<RocketShipCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RocketShipCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RocketShipCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
