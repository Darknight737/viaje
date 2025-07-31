import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionBoletoDestinoComponent } from './relacion-boleto-destino.component';

describe('RelacionBoletoDestinoComponent', () => {
  let component: RelacionBoletoDestinoComponent;
  let fixture: ComponentFixture<RelacionBoletoDestinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelacionBoletoDestinoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelacionBoletoDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
