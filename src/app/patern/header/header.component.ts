import { Component } from '@angular/core';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { DesktopTabletMenuComponent } from './desktop-tablet-menu/desktop-tablet-menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  styleUrls: ['./header.component.scss'],
  imports: [MobileMenuComponent, DesktopTabletMenuComponent],
})
export class HeaderComponent {
  title = 'My Application Header';
}
