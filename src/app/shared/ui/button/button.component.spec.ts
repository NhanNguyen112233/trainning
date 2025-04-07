import { Utils } from './../../../base/utils/utils-selector';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //should give a correct type
  it('should give correct class', async () => {
    component.type = 'secondary';
    await Utils.runOnPushChangeDetection(fixture);

    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button.className).toBe('btn btn-secondary');
  });
  //should give a correct style
  it('should give correct style', async () => {
    component.style = 'color:red';
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    await Utils.runOnPushChangeDetection(fixture);
    expect(button.style.color).toBe('red');
  });

  //should emit onClick event
  it('should emit onClick event', () => {
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    const spy = jest.spyOn(component.onClick, 'emit');
    button.click();
    expect(spy).toHaveBeenCalled();
  });
  //should have correct class
  it('should have correct class', async () => {
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    component.class = 'custom-class';
    await Utils.runOnPushChangeDetection(fixture);
    expect(button.className).toBe('btn custom-class');
  });
  //should have been disabled
  it('should have been disabled', async () => {
    const button = fixture.debugElement.query(By.css('button')).nativeElement;

    component.isDisabled = true;
    await Utils.runOnPushChangeDetection(fixture);

    expect(button.disabled).toBe(true);
  });
});
