import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleBoletoComponent } from './detalle-boleto.component';

describe('DetalleBoletoComponent', () => {
  let component: DetalleBoletoComponent;
  let fixture: ComponentFixture<DetalleBoletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleBoletoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleBoletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
