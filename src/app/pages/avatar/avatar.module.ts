import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarRoutingModule } from './avatar-routing.module';
import { AvatarPage }          from './avatar.page';
import { SharedModule }        from '../../shared/shared.module';
import { IonicModule }         from '@ionic/angular';


@NgModule({
  declarations: [AvatarPage],
  imports: [
    CommonModule,
    AvatarRoutingModule,
    SharedModule,
    IonicModule,
  ],
  exports:[AvatarPage]
})
export class AvatarModule { }
