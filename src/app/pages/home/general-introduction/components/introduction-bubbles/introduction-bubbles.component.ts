import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-introduction-bubbles',
  templateUrl: './introduction-bubbles.component.html',
  styleUrl: './introduction-bubbles.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroductionBubblesComponent {}
