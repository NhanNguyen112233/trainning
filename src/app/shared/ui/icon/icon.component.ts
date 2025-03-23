import { Component, Input } from '@angular/core';
import { SvgIconComponent, SvgIcons } from '@ngneat/svg-icon';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [SvgIconComponent],
  template: `<svg-icon
    [key]="key"
    [size]="size"
    [fontSize]="fontSize"
    [color]="color"
    [width]="width"
    [height]="height"
    [noShrink]="noShrink"
  ></svg-icon>`,
})
export class IconComponent {
  @Input() key!: SvgIcons;
  @Input() size!: string;
  @Input() fontSize!: string;
  @Input() color!: string;
  @Input() width!: string | number;
  @Input() height!: string | number;
  @Input() noShrink!: boolean;
}
