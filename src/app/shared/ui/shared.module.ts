import { AvatarComponent } from '@shared/ui/avatar/avatar.component';
import { ButtonComponent } from '@shared/ui/button/button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '@shared/ui/icon/icon.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonComponent, AvatarComponent, IconComponent],
  exports: [AvatarComponent, IconComponent, ButtonComponent],
})
export class SharedModule {}
