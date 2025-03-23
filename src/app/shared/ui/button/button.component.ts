import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { TButtonType } from './button.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() type: TButtonType = 'primary';
  @Input() isDisabled: boolean = false;
  @Input() class: string = '';
  @Input() style: string = '';

  @Output() onClick = new EventEmitter<void>();
}
