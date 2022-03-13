import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvatarPage }           from './avatar.page';

const routes: Routes = [{
  path: '',
  component: AvatarPage
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvatarRoutingModule { }
