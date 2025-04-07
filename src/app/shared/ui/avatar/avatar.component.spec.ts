import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarComponent } from './avatar.component';
import { By } from '@angular/platform-browser';
import { Utils } from 'src/app/base/utils/utils-selector';

describe('AvatarComponent', () => {
  let component: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //should the image can load
  it('should the image can load', () => {
    const image = fixture.debugElement.query(By.css('img'))
      .nativeElement as HTMLImageElement;

    image.src =
      'https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg';

    image.onload = () => {
      expect(image.complete).toBe(true);
    };

    image.onerror = () => {
      fail('iamge failed to load');
    };
  });
  //should the avt width and height is equal to diameter

  it('should the avt widh and height is equal to diameter', async () => {
    component.diameter = 120;
    const avtContainer = fixture.debugElement.query(
      By.css('[data-testId="avt-test-id"]')
    ).nativeElement as HTMLDivElement;
    await Utils.runOnPushChangeDetection(fixture);
    expect(avtContainer.style.width).toBe('120px');
    expect(avtContainer.style.height).toBe('120px');
  });
});
