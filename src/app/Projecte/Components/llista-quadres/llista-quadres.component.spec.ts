import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaQuadresComponent } from './llista-quadres.component';

describe('LlistaQuadresComponent', () => {
  let component: LlistaQuadresComponent;
  let fixture: ComponentFixture<LlistaQuadresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlistaQuadresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlistaQuadresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
