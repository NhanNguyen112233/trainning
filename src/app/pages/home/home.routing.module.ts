import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const route: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(route)],
})
export class HomeRoutingModule {}
