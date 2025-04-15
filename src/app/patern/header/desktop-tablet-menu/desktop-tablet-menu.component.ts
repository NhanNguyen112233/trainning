import { Component, Input } from '@angular/core';
import { IconComponent } from '@shared/ui/icon/icon.component';
import { IHeaderMenu } from '../header.component';
import { ButtonComponent } from '@shared/ui/button/button.component';

@Component({
  selector: 'app-desktop-tablet-menu',
  standalone: true,
  imports: [IconComponent, ButtonComponent],
  templateUrl: './desktop-tablet-menu.component.html',
  styleUrl: './desktop-tablet-menu.component.scss',
})
export class DesktopTabletMenuComponent {
  @Input() menus: IHeaderMenu[] = [];
}
