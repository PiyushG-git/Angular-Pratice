import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDeritivesComponent } from './structural-deritives.component';

describe('StructuralDeritivesComponent', () => {
  let component: StructuralDeritivesComponent;
  let fixture: ComponentFixture<StructuralDeritivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDeritivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDeritivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
