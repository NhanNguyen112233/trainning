import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralIntroductionComponent } from './general-introduction.component';

xdescribe('GeneralIntroductionComponent', () => {
  let component: GeneralIntroductionComponent;
  let fixture: ComponentFixture<GeneralIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralIntroductionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
