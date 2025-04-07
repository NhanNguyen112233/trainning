import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AvatarComponent } from '../../shared/ui/avatar/avatar.component';
import { ICardData } from './card.type';
import { SkeletonComponent } from '@shared/ui/skeleton/skeleton.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [AvatarComponent, SkeletonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() data: ICardData = {
    avt: '',
    description: '',
    name: '',
    occupations: '',
  };

  @Input() onLoadData: boolean = false;
}
