import { AvatarComponent } from '@shared/ui/avatar/avatar.component';
import { ButtonComponent } from '@shared/ui/button/button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '@shared/ui/icon/icon.component';
import { SkeletonComponent } from '@shared/ui/skeleton/skeleton.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonComponent,
    SkeletonComponent,
    AvatarComponent,
    IconComponent,
  ],
  exports: [AvatarComponent, IconComponent, ButtonComponent, SkeletonComponent],
})
export class SharedModule {}
