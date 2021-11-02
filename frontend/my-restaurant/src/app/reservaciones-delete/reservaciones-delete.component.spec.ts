import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservacionesDeleteComponent } from './reservaciones-delete.component';

describe('ReservacionesDeleteComponent', () => {
  let component: ReservacionesDeleteComponent;
  let fixture: ComponentFixture<ReservacionesDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservacionesDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservacionesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
