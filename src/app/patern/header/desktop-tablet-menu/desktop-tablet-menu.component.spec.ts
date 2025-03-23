import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopTabletMenuComponent } from './desktop-tablet-menu.component';

describe('DesktopTabletMenuComponent', () => {
  let component: DesktopTabletMenuComponent;
  let fixture: ComponentFixture<DesktopTabletMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopTabletMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopTabletMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
