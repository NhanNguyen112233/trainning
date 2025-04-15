import { Injectable, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ComponentStore } from '@ngrx/component-store';
import { catchError, map, of } from 'rxjs';
export type TBreakPointDevices = 'DESKTOP' | 'TABLET' | 'MOBILE';
export const MediaBreakpointEdge: Record<TBreakPointDevices, string> = {
  DESKTOP: '64em',
  TABLET: '63.9375em',
  MOBILE: '47.9375em',
};

export const MediaBreakpointsCondition = {
  DESKTOP: `(min-width: ${MediaBreakpointEdge['DESKTOP']})`,
  TABLET: `(min-width: 48em) and (max-width: ${MediaBreakpointEdge['TABLET']})`,
  MOBILE: `(max-width: ${MediaBreakpointEdge['MOBILE']})`,
};

export interface MediaBreakpointState {
  currentDevice: TBreakPointDevices;
}
@Injectable({
  providedIn: 'root',
})
export class MediaBreakpointStore extends ComponentStore<MediaBreakpointState> {
  readonly currentScreen = this.select((state) => state.currentDevice);

  constructor(private breakpointObserver: BreakpointObserver) {
    super({ currentDevice: 'DESKTOP' });
    this.breakpointObserver
      .observe(
        ['DESKTOP', 'TABLET', 'MOBILE'].map((device) =>
          this.getBreakpointsCondition(device as TBreakPointDevices)
        )
      )

      .pipe(
        map((state: BreakpointState) => {
          if (state.breakpoints[MediaBreakpointsCondition['DESKTOP']]) {
            return 'DESKTOP';
          } else if (state.breakpoints[MediaBreakpointsCondition['TABLET']]) {
            return 'TABLET';
          } else {
            return 'MOBILE';
          }
        }),
        catchError((e) => {
          console.error('error when observing breakpoints', e);

          return of('MOBILE' as TBreakPointDevices);
        })
      )
      .subscribe((currentDevice) => this.patchState({ currentDevice }));
  }

  private getBreakpointsCondition(device: TBreakPointDevices) {
    return (
      MediaBreakpointsCondition[device] || MediaBreakpointsCondition['DESKTOP']
    );
  }
}
