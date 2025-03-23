import { HeaderComponent } from '@pattern/header/header.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ReviewComponent } from './review/review.component';
import { GeneralIntroductionComponent } from './general-introduction/general-introduction.component';
import { CourseComponent } from './course/course.component';
import { ContactComponent } from './contact/contact.component';
import { HomeRoutingModule } from './home.routing.module';
import { SharedModule } from '@shared/ui/shared.module';
import { FooterComponent } from '../../patern/footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    ReviewComponent,
    GeneralIntroductionComponent,
    CourseComponent,
    ContactComponent,
  ],
  imports: [HomeRoutingModule, SharedModule, HeaderComponent, FooterComponent],
})
export class HomeModule {}
