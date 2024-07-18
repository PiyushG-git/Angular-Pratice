import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NagivateComponent } from './nagivate.component';

describe('NagivateComponent', () => {
  let component: NagivateComponent;
  let fixture: ComponentFixture<NagivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NagivateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NagivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
