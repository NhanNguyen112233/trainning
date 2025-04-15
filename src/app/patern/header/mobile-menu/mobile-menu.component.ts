import { Component, Input } from '@angular/core';
import { IHeaderMenu } from '../header.component';
import { IconComponent } from '@shared/ui/icon/icon.component';
import { ButtonComponent } from '@shared/ui/button/button.component';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [IconComponent, ButtonComponent],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss',
})
export class MobileMenuComponent {
  @Input() menu: IHeaderMenu[] = [];
}
