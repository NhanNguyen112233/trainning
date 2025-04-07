import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DEFAULT_SKELETON_CONFIG, ISkeletonProps } from './skeleton.type';
import { CommonModule } from '@angular/common';
import { Utils } from 'src/app/base/utils/utils-selector';

@Component({
  selector: 'app-skeleton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton.component.html',
  styleUrl: './skeleton.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonComponent {
  @Input() height!: ISkeletonProps['height'];
  @Input() width!: ISkeletonProps['width'];
  @Input() styleClass!: ISkeletonProps['styleClass'];
  @Input() style!: ISkeletonProps['style'];
  @Input() borderRadius!: ISkeletonProps['borderRadius'];
  @Input() shape: ISkeletonProps['shape'] = 'circle';
  @Input() animation: ISkeletonProps['animation'] = 'wave';
  @Input() diameter!: ISkeletonProps['diameter'];

  getContainerClass() {
    return {
      skeleton: true,
      'skeleton-shape-circle': this.shape === 'circle',
      'skeleton-animation': this.animation === 'wave',
    };
  }

  getContainerStyle() {
    const heightStyle =
      this.height && typeof this.height === 'number'
        ? Utils.pxToRem(this.height)
        : DEFAULT_SKELETON_CONFIG.DEFAULT_HEIGHT;
    const widthStyle =
      this.width && typeof this.width === 'number'
        ? Utils.pxToRem(this.width)
        : DEFAULT_SKELETON_CONFIG.DEFAULT_WIDTH;

    const borderRadiusStyle =
      this.borderRadius || DEFAULT_SKELETON_CONFIG.DEFAULT_BORDER_RADIUS;

    if (this.style) {
      return {
        height:
          this.diameter && this.shape === 'circle'
            ? Utils.pxToRem(this.diameter)
            : heightStyle,
        width:
          this.diameter && this.shape === 'circle'
            ? Utils.pxToRem(this.diameter)
            : widthStyle,
        borderRadius: borderRadiusStyle,
        ...this.style,
      };
    } else {
      return {
        height:
          this.diameter && this.shape === 'circle'
            ? Utils.pxToRem(this.diameter)
            : heightStyle,
        width:
          this.diameter && this.shape === 'circle'
            ? Utils.pxToRem(this.diameter)
            : widthStyle,
        borderRadius: borderRadiusStyle,
      };
    }
  }
}
