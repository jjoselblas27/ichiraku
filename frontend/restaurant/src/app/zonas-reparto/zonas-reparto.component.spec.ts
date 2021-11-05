import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonasRepartoComponent } from './zonas-reparto.component';

describe('ZonasRepartoComponent', () => {
  let component: ZonasRepartoComponent;
  let fixture: ComponentFixture<ZonasRepartoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonasRepartoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonasRepartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
