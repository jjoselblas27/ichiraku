import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservacionesEditComponent } from './reservaciones-edit.component';

describe('ReservacionesEditComponent', () => {
  let component: ReservacionesEditComponent;
  let fixture: ComponentFixture<ReservacionesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservacionesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservacionesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
