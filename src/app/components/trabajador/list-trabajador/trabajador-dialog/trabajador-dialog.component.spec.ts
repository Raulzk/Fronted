import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajadorDialogComponent } from './trabajador-dialog.component';

describe('TrabajadorDialogComponent', () => {
  let component: TrabajadorDialogComponent;
  let fixture: ComponentFixture<TrabajadorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajadorDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajadorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
