import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionVentaComponent } from './creacion-venta.component';

describe('CreacionVentaComponent', () => {
  let component: CreacionVentaComponent;
  let fixture: ComponentFixture<CreacionVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionVentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
