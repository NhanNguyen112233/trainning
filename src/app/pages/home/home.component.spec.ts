import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { ReviewStore } from '@shared/store/review.store';
import { By } from '@angular/platform-browser';
import { LazyLoadDirectiveDirective } from '@shared/directives/lazy-load-directive.directive';

// @Directive({
//   selector: '[appLazyLoadDirective]',
//   standalone: true,
// })
// export class LazyLoadDirectiveDirective {
//   @Input() threshHold = jest.fn().mockReturnValue(0.2);
//   @Output() elementVisible = jest.fn();
// }
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let reviewStoreMocked: Partial<jest.Mocked<ReviewStore>>;
  let lazyLoadDirectiveMocked: Partial<jest.Mocked<LazyLoadDirectiveDirective>>;
  beforeEach(async () => {
    reviewStoreMocked = {
      getReviews: jest.fn(),
    };

    lazyLoadDirectiveMocked = {
      elementVisible: { emit: jest.fn() } as any,
      threshHold: jest.fn().mockReturnValue(0.2) as any,
    };
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        {
          provide: ReviewStore,
          useValue: reviewStoreMocked,
        },
        {
          provide: LazyLoadDirectiveDirective,
          useValue: lazyLoadDirectiveMocked,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all the child component', () => {
    [
      'appHeader',
      'appIntroduction',
      'appReview',
      'appCourse',
      'appContact',
      'appFooter',
    ].forEach((dataTestId) => {
      const element = fixture.debugElement.query(
        By.css(`[data-testId=${dataTestId}]`)
      ).nativeElement;

      expect(element).toBeTruthy();
    });
  });

  // it('should call observeSection with correct parameters when elementVisible is emitted', () => {
  //   const element = fixture.debugElement.query(
  //     By.css(`[data-testId="appReviewWithDirective"]`)
  //   ).nativeElement;

  //   const observeSectionSpy = jest.spyOn(component, 'observeSection');
  //   const mockEvent = [{ isIntersecting: true }] as IntersectionObserverEntry[];

  //   lazyLoadDirectiveMocked.elementVisible?.emit(mockEvent);
  //   expect(observeSectionSpy).toHaveBeenCalledWith(mockEvent, 'appReview');
  // });

  it('should call reviewStore.getReviews when appReview is visible', () => {
    const mockEvent = [{ isIntersecting: true }] as IntersectionObserverEntry[];

    component.observeSection(mockEvent, 'appReview');
    expect(reviewStoreMocked.getReviews).toHaveBeenCalled();
  });

  it('should not call reviewStore.getReviews when no entries are intersecting', () => {
    const mockEvent = [
      { isIntersecting: false },
    ] as IntersectionObserverEntry[];

    component.observeSection(mockEvent, 'appReview');
    expect(reviewStoreMocked.getReviews).not.toHaveBeenCalled();
  });

  it('should handle other sections without calling reviewStore.getReviews', () => {
    const mockEvent = [{ isIntersecting: true }] as IntersectionObserverEntry[];

    component.observeSection(mockEvent, 'appCourse');
    expect(reviewStoreMocked.getReviews).not.toHaveBeenCalled();

    component.observeSection(mockEvent, 'appContact');
    expect(reviewStoreMocked.getReviews).not.toHaveBeenCalled();

    component.observeSection(mockEvent, 'appFooter');
    expect(reviewStoreMocked.getReviews).not.toHaveBeenCalled();

    component.observeSection(mockEvent, 'other string');
    expect(reviewStoreMocked.getReviews).not.toHaveBeenCalled();
  });
});
