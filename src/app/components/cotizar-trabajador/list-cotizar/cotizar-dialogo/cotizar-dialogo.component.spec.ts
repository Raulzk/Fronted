import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizarDialogoComponent } from './cotizar-dialogo.component';

describe('CotizarDialogoComponent', () => {
  let component: CotizarDialogoComponent;
  let fixture: ComponentFixture<CotizarDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotizarDialogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotizarDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
