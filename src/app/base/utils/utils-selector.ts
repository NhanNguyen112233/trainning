import { ChangeDetectorRef } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { GenericState } from '@shared/constant/generic.state';
import { ELoadingStatus } from '@shared/constant/global.const';

/**
 * Utility class containing helper methods for common operations.
 */
export class Utils {
  /**
   * Converts a pixel value to a rem value based on the provided base font size.
   *
   * @param px - The pixel value to be converted.
   * @param baseFontSize - The base font size to use for the conversion. Defaults to 16.
   * @returns The equivalent rem value as a string.
   *
   * @example
   * ```typescript
   * const remValue = Utils.pxToRem(32); // "2rem"
   * const customRemValue = Utils.pxToRem(32, 20); // "1.6rem"
   * ```
   */
  static pxToRem(px: number, baseFontSize: number = 16): string {
    return `${px / baseFontSize}rem`;
  }

  /**
   * Utility method to trigger change detection for components using the OnPush change detection strategy.
   * This ensures that the component's view is updated and stable after any asynchronous operations.
   *
   * @template T - The type of the component associated with the fixture.
   * @param fixture - The `ComponentFixture` instance for the component under test.
   *
   * @remarks
   * - This method marks the component for check using `markForCheck` and then explicitly runs change detection.
   * - It waits for the fixture to become stable using `whenStable`, ensuring all asynchronous tasks are completed.
   *
   * @example
   * ```typescript
   * it('should update the view after async operation', async () => {
   *   const fixture = TestBed.createComponent(MyComponent);
   *   await TestUtils.runOnPushChangeDetection(fixture);
   *   expect(fixture.nativeElement.textContent).toContain('Updated Value');
   * });
   * ```
   */
  static async runOnPushChangeDetection<T>(
    fixture: ComponentFixture<T>
  ): Promise<void> {
    const cd =
      fixture.debugElement.injector.get<ChangeDetectorRef>(ChangeDetectorRef);
    cd.markForCheck();

    cd.detectChanges();
    await fixture.whenStable();
  }

  static isLoadingWithTarget(
    currentState: ELoadingStatus,
    compareState: ELoadingStatus
  ) {
    return currentState === compareState;
  }

  static defaultGenericConfig<T>(data: T): GenericState<T> {
    return {
      status: ELoadingStatus.LOADING,
      errorMsg: null,
      data,
    };
  }
}
