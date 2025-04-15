import {
  Directive,
  ElementRef,
  OnDestroy,
  Input,
  OnInit,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';

@Directive({
  selector: '[appLazyLoadDirective]',
  standalone: true,
})
export class LazyLoadDirectiveDirective implements AfterViewInit, OnDestroy {
  private intersectObserver!: IntersectionObserver;
  /**
   * @description
   * define the % of view port of the element that is being observed
   */
  @Input() threshHold: number = 0.2;

  @Output() elementVisible = new EventEmitter();
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    /* istanbul ignore next */
    if (
      !this.intersectObserver &&
      typeof IntersectionObserver !== 'undefined'
    ) {
      this.intersectObserver = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
          //if the entries is visible, do nothing
          entries.forEach((entry) => {
            if (
              entry.isIntersecting &&
              entry.intersectionRatio > this.threshHold
            ) {
              this.elementVisible.emit(entries);
              this.intersectObserver.unobserve(this.elementRef.nativeElement);
            }
          });
        },
        {
          threshold: this.threshHold,
          root: null, // Use viewport as root
          rootMargin: '0px',
        }
      );

      this.intersectObserver.observe(this.elementRef.nativeElement);
    }
  }

  ngOnDestroy(): void {
    if (this.intersectObserver) {
      this.intersectObserver.disconnect();
    }
  }
}
