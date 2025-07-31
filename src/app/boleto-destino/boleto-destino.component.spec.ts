import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletoDestinoComponent } from './boleto-destino.component';

describe('BoletoDestinoComponent', () => {
  let component: BoletoDestinoComponent;
  let fixture: ComponentFixture<BoletoDestinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoletoDestinoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoletoDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
