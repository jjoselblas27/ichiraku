import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservacionesNewComponent } from './reservaciones-new.component';

describe('ReservacionesNewComponent', () => {
  let component: ReservacionesNewComponent;
  let fixture: ComponentFixture<ReservacionesNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservacionesNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservacionesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
