import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule, mainRouterComponents } from './main.routing.module';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: [mainRouterComponents]
})
export class MainModule { }
