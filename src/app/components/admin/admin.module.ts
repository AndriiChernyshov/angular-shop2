import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent, AdminProductListComponent } from '.';

import { AdminRoutingModule} from './admin.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminProductListComponent, AdminComponent]
})
export class AdminModule { }
