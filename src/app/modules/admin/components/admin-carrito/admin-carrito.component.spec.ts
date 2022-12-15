import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCarritoComponent } from './admin-carrito.component';

describe('AdminCarritoComponent', () => {
  let component: AdminCarritoComponent;
  let fixture: ComponentFixture<AdminCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCarritoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
