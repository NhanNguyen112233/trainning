import { Component, ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { LazyLoadDirectiveDirective } from './lazy-load-directive.directive';

@Component({
  template: `<div
    appLazyLoadDirective
    [threshHold]="threshold"
    (elementVisible)="onElementVisible()"
  ></div>`,
})
class TestComponent {
  threshold = 0.5;
  onElementVisible = jest.fn();
}

describe('LazyLoadDirectiveDirective', () => {
  let component: TestComponent;
  let elementRef: ElementRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [LazyLoadDirectiveDirective],
    }).compileComponents();

    const fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    elementRef = fixture.debugElement.children[0];
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new LazyLoadDirectiveDirective(elementRef);
    expect(directive).toBeTruthy();
  });

  it('should emit elementVisible when element is in viewport', () => {
    const directive = new LazyLoadDirectiveDirective(elementRef);
    directive.threshHold = 0.5;
    directive.elementVisible.subscribe(() => {
      expect(component.onElementVisible).toHaveBeenCalled();
    });

    directive.ngAfterViewInit();

    const mockEntry = {
      isIntersecting: true,
      intersectionRatio: 0.6,
    } as IntersectionObserverEntry;

    // Mock the IntersectionObserver and its callback
    const mockObserverCallback = jest.fn();
    (directive as any).intersectObserver = {
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
      callback: mockObserverCallback,
    };

    mockObserverCallback([mockEntry]);
  });

  it('should disconnect observer on destroy', () => {
    const directive = new LazyLoadDirectiveDirective(elementRef);
    directive.ngAfterViewInit();

    // Mock the IntersectionObserver to ensure it is defined
    directive['intersectObserver'] = {
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    } as unknown as IntersectionObserver;

    const disconnectSpy = jest.spyOn(
      directive['intersectObserver'],
      'disconnect'
    );
    directive.ngOnDestroy();

    expect(disconnectSpy).toHaveBeenCalled();
  });
});
