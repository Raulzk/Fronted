import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajadorComponent } from './trabajador.component';

describe('TrabajadorComponent', () => {
  let component: TrabajadorComponent;
  let fixture: ComponentFixture<TrabajadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
