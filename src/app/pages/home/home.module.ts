import { HeaderComponent } from '@pattern/header/header.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ReviewComponent } from './review/review.component';
import { GeneralIntroductionComponent } from './general-introduction/general-introduction.component';
import { CourseComponent } from './course/course.component';
import { ContactComponent } from './contact/contact.component';
import { HomeRoutingModule } from './home.routing.module';
import { SharedModule } from '@shared/ui/shared.module';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '@pattern/footer/footer.component';
import { CardComponent } from '@pattern/card/card.component';
import { ReviewStore } from '@shared/store/review.store';

@NgModule({
  declarations: [
    HomeComponent,
    ReviewComponent,
    GeneralIntroductionComponent,
    CourseComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    HeaderComponent,
    FooterComponent,
    CardComponent,
  ],
  providers: [ReviewStore],
})
export class HomeModule {}
