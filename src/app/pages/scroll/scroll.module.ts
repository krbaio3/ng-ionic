import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScrollPageRoutingModule } from './scroll-routing.module';

import { ScrollPage } from './scroll.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollPageRoutingModule,
    SharedModule
  ],
  declarations: [ScrollPage]
})
export class ScrollPageModule {}
