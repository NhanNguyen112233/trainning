import { ICardData } from './card.type';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { By } from '@angular/platform-browser';
import { runOnPushChangeDetection } from 'src/app/base/utils/test-helper';
import { AvatarComponent } from '../../shared/ui/avatar/avatar.component';
import { Component } from '@angular/core';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent, AvatarComponent],
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

    await runOnPushChangeDetection(fixture);
    const cardDescription = fixture.debugElement.query(
      By.css('[data-testId="card-description"]')
    ).nativeElement as HTMLElement;

    const cardName = fixture.debugElement.query(
      By.css('[data-testId="card-name"]')
    ).nativeElement as HTMLElement;

    const cardOccupations = fixture.debugElement.query(
      By.css('[data-testId="card-occupations"]')
    ).nativeElement as HTMLElement;

    expect(cardDescription.textContent).toBe(expectedData.description);
    expect(cardName.textContent).toBe(expectedData.name);

    expect(cardOccupations.textContent).toBe(expectedData.occupations);
  });
  //avt-component has been display
  it('should the avt-component has been initialized', () => {
    const avatarComponent = fixture.debugElement.query(
      By.css("[data-testId='avatar-app']")
    ).nativeElement as Component;
    expect(avatarComponent).toBeTruthy();
  });
});
