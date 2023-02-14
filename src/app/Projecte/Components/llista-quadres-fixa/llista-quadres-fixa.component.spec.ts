import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaQuadresFixaComponent } from './llista-quadres-fixa.component';

describe('LlistaQuadresFixaComponent', () => {
  let component: LlistaQuadresFixaComponent;
  let fixture: ComponentFixture<LlistaQuadresFixaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlistaQuadresFixaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlistaQuadresFixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
