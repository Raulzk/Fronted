import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizarTrabajadorComponent } from './cotizar-trabajador.component';

describe('CotizarTrabajadorComponent', () => {
  let component: CotizarTrabajadorComponent;
  let fixture: ComponentFixture<CotizarTrabajadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotizarTrabajadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotizarTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
