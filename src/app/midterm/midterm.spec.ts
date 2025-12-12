import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Midterm } from './midterm';

describe('Midterm', () => {
  let component: Midterm;
  let fixture: ComponentFixture<Midterm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Midterm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Midterm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
