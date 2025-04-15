import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionBubblesComponent } from './introduction-bubbles.component';

describe('IntroductionBubblesComponent', () => {
  let component: IntroductionBubblesComponent;
  let fixture: ComponentFixture<IntroductionBubblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductionBubblesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IntroductionBubblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
