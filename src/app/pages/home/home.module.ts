import { HeaderComponent } from '@pattern/header/header.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ReviewComponent } from './review/review.component';
import { GeneralIntroductionComponent } from './general-introduction/general-introduction.component';
import { CourseComponent } from './course/course.component';
import { ContactComponent } from './contact/contact.component';
import { HomeRoutingModule } from './home.routing.module';
import { IntroductionBubblesComponent } from './general-introduction/components/introduction-bubbles/introduction-bubbles.component';
import { SharedModule } from '@shared/ui/shared.module';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '@pattern/footer/footer.component';
import { CardComponent } from '@pattern/card/card.component';
import { ReviewStore } from '@shared/store/review.store';
import { LazyLoadDirectiveDirective } from '@shared/directives/lazy-load-directive.directive';

@NgModule({
  declarations: [
    HomeComponent,
    ReviewComponent,
    GeneralIntroductionComponent,
    CourseComponent,
    ContactComponent,
    IntroductionBubblesComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    LazyLoadDirectiveDirective,
  ],
  providers: [ReviewStore],
})
export class HomeModule {}
