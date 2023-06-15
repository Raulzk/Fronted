import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjConfirmacionComponent } from './msj-confirmacion.component';

describe('MsjConfirmacionComponent', () => {
  let component: MsjConfirmacionComponent;
  let fixture: ComponentFixture<MsjConfirmacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsjConfirmacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsjConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
