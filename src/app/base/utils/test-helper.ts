import { ChangeDetectorRef } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

export async function runOnPushChangeDetection<T>(
  fixture: ComponentFixture<T>
): Promise<void> {
  const cd =
    fixture.debugElement.injector.get<ChangeDetectorRef>(ChangeDetectorRef);
  cd.markForCheck();

  cd.detectChanges();
  await fixture.whenStable();
}
