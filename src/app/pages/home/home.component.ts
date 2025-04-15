import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ReviewStore } from '@shared/store/review.store';
type TElementRefName = 'appReview' | 'appContact' | 'appCourse' | 'appFooter';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HomeComponent implements OnInit {
  constructor(private reviewStore: ReviewStore) {}

  ngOnInit(): void {
    console.log('call store');
  }

  observeSection(
    intersectEntry: IntersectionObserverEntry[],
    loadElementRef: TElementRefName | string
  ) {
    const isIntersecting = intersectEntry.some((entry) => entry.isIntersecting);

    if (isIntersecting) {
      // Load your component or data here
      switch (loadElementRef) {
        case 'appReview':
          this.reviewStore.getReviews();
          return;
        case 'appCourse':
          // this.reviewStore.getReviews();
          return;
        case 'appContact':
          // this.reviewStore.getReviews();
          return;
        case 'appFooter':
          // this.reviewStore.getReviews();
          return;
        default:
          return;
      }

      // Optionally, if you only need to detect visibility once:
      // this.intersectObserver.unobserve(entries[0].target);
    }
  }
}
