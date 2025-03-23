import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

const fakeAvt = `https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg
`;

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  @Input() image: string = fakeAvt;
  @Input() diameter: number = 120;
}
