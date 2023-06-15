import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTrabajadorComponent } from './list-trabajador.component';

describe('ListTrabajadorComponent', () => {
  let component: ListTrabajadorComponent;
  let fixture: ComponentFixture<ListTrabajadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTrabajadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
