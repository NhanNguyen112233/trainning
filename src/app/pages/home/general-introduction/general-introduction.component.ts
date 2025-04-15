import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-general-introduction',

  templateUrl: './general-introduction.component.html',
  styleUrl: './general-introduction.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneralIntroductionComponent {}
