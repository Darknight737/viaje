import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRelacionComponent } from './detalle-relacion.component';

describe('DetalleRelacionComponent', () => {
  let component: DetalleRelacionComponent;
  let fixture: ComponentFixture<DetalleRelacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleRelacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleRelacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
