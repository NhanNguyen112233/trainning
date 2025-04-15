import { Component } from '@angular/core';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { DesktopTabletMenuComponent } from './desktop-tablet-menu/desktop-tablet-menu.component';
import {
  MediaBreakpointStore,
  TBreakPointDevices,
} from '@shared/store/media-breakpoint.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
export interface IHeaderMenu {
  title: string;
  href: string;
  type: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  styleUrls: ['./header.component.scss'],
  imports: [MobileMenuComponent, DesktopTabletMenuComponent, CommonModule],
})
export class HeaderComponent {
  title = 'My Application Header';
  menus: IHeaderMenu[] = [
    {
      title: 'About',
      href: '/about',
      type: 'text',
    },
    {
      title: 'Services',
      href: '/service',
      type: 'text',
    },
    {
      title: 'Our Work',
      href: '/ourwork',
      type: 'text',
    },
    {
      title: 'Enrol Now',
      href: '/about',
      type: 'button',
    },
  ];
  deviceScreen!: Observable<TBreakPointDevices>;
  constructor(private mediaBreakpointStore: MediaBreakpointStore) {
    this.deviceScreen = mediaBreakpointStore.currentScreen;
  }
}
