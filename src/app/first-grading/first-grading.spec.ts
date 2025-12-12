import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstGrading } from './first-grading';

describe('FirstGrading', () => {
  let component: FirstGrading;
  let fixture: ComponentFixture<FirstGrading>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstGrading]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstGrading);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
