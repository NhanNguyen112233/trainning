import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkeletonComponent } from '@shared/ui/skeleton/skeleton.component';

import { CardComponent } from './card.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { Utils } from 'src/app/base/utils/utils-selector';
import { AvatarComponent } from '@shared/ui/avatar/avatar.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent, AvatarComponent, SkeletonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //render template
  it('render template', async () => {
    const expectedData = {
      avt: '',
      description: 'This is a great course. It helped me alot. Thank you :)',
      name: 'Jane Cooper',
      occupations: 'Developer, sony',
    };
    component.data = expectedData;
    component.onLoadData = false;

    await Utils.runOnPushChangeDetection(fixture);
    const cardDescription = fixture.debugElement.query(
      By.css('[data-testId="card-description"]')
    ).nativeElement as HTMLElement;

    const cardName = fixture.debugElement.query(
      By.css('[data-testId="card-name"]')
    ).nativeElement as HTMLElement;

    const cardOccupations = fixture.debugElement.query(
      By.css('[data-testId="card-occupations"]')
    ).nativeElement as HTMLElement;

    expect(cardDescription.textContent?.trim()).toBe(expectedData.description);
    expect(cardName.textContent?.trim()).toBe(expectedData.name);

    expect(cardOccupations.textContent?.trim()).toBe(expectedData.occupations);
  });
  //avt-component has been display
  it('should the avt-component has been initialized', async () => {
    component.onLoadData = false;
    await Utils.runOnPushChangeDetection(fixture); // Add this line
    const avatarComponent = fixture.debugElement.query(
      By.css("[data-testId='avatar-app']")
    ).nativeElement as Component;
    expect(avatarComponent).toBeTruthy();
  });

  //test - on-load is false
  describe('when onload is true', () => {
    it('should render all the skeleton when the component is onload', async () => {
      component.onLoadData = true;
      await Utils.runOnPushChangeDetection(fixture);
      [
        'card-name-skeleton',
        'card-occupations-skeleton',
        'avatar-app-skeleton',
      ].forEach((dataTestId) => {
        const queryResult = fixture.debugElement.query(
          By.css(`[data-testId=${dataTestId}]`)
        );
        expect(queryResult).toBeTruthy();
      });
    });
  });
});
