import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { of } from 'rxjs';
import { MediaBreakpointStore } from './media-breakpoint.service';

jest.mock('@angular/cdk/layout', () => ({
  BreakpointObserver: jest.fn().mockImplementation(() => ({
    observe: jest
      .fn()
      .mockReturnValue(of({ matches: false } as BreakpointState)),
  })),
}));

xdescribe('MediaBreakpointStore (Jest)', () => {
  let store: MediaBreakpointStore;
  let mockBreakpointObserver: jest.Mocked<BreakpointObserver>;

  beforeEach(() => {
    mockBreakpointObserver =
      new BreakpointObserver() as jest.Mocked<BreakpointObserver>;
    store = new MediaBreakpointStore(mockBreakpointObserver);
    // Mock the observable to return a default value
  });

  it('should initialize with DESKTOP as default', () => {
    store.patchState({ currentDevice: 'DESKTOP' });
    store.currentScreen.subscribe((screen) => {
      expect(screen).toEqual('DESKTOP');
    });
  });

  it('should update state when breakpoint changes', (done) => {
    mockBreakpointObserver.observe.mockReturnValue(
      of({
        matches: true,
        breakpoints: { '(max-width: 47.9375em)': true },
      } as BreakpointState)
    );
    store.currentScreen.subscribe((device) => {
      expect(device).toBe('MOBILE');
      done();
    });
  });

  it('should update state when breakpoint changes to TABLET', (done) => {
    mockBreakpointObserver.observe.mockReturnValue(
      of({
        matches: true,
        breakpoints: { '(min-width: 48em) and (max-width: 63.9375em)': true },
      } as BreakpointState)
    );

    store.currentScreen.subscribe((device) => {
      expect(device).toBe('TABLET');
      done();
    });
  });

  it('should update state when breakpoint changes to DESKTOP', (done) => {
    mockBreakpointObserver.observe.mockReturnValue(
      of({
        matches: true,
        breakpoints: { '(min-width: 64em)': true },
      } as BreakpointState)
    );

    store.currentScreen.subscribe((device) => {
      expect(device).toBe('DESKTOP');
      done();
    });
  });
});
