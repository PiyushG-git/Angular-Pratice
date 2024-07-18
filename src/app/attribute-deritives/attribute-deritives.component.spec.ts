import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDeritivesComponent } from './attribute-deritives.component';

describe('AttributeDeritivesComponent', () => {
  let component: AttributeDeritivesComponent;
  let fixture: ComponentFixture<AttributeDeritivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributeDeritivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeDeritivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
