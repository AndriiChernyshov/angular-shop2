import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule, appRouterComponents } from './app.routing.module';

import { AppComponent } from './app.component';
import { ProductService } from './services/product.service';
import { ConfirmDialogService } from './services/confirm-dialog.service';
import { AuthService } from './services/auth.service';
import {EnumExService} from './services/enum-ex.service';

import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    appRouterComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, ProductService, ConfirmDialogService, AuthService, EnumExService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router){
    console.log('Routes: ', JSON.stringify(router.config, undefined,2));
  }
}
