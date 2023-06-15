import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTrabajadorComponent } from './add-edit-trabajador.component';

describe('AddEditTrabajadorComponent', () => {
  let component: AddEditTrabajadorComponent;
  let fixture: ComponentFixture<AddEditTrabajadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTrabajadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
