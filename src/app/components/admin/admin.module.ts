import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminComponent, AdminProductListComponent, AdminProductEditComponent } from '.';

import { AdminRoutingModule} from './admin.routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [AdminProductListComponent, AdminComponent, AdminProductEditComponent]
})
export class AdminModule { }
