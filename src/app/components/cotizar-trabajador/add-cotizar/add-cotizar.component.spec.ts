import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCotizarComponent } from './add-cotizar.component';

describe('AddCotizarComponent', () => {
  let component: AddCotizarComponent;
  let fixture: ComponentFixture<AddCotizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCotizarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCotizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
