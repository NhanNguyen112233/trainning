import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AvatarComponent } from '../../shared/ui/avatar/avatar.component';
import { ICardData } from './card.type';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [AvatarComponent],
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
}
