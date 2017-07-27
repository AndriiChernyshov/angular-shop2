import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';


import { AppRoutingModule, appRouterComponents } from './app.routing.module';

import { AppComponent } from './app.component';
import { ProductService } from './services/product.service';
import { ConfirmDialogService } from './services/confirm-dialog.service';
import { AuthService } from './services/auth.service';

import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    appRouterComponents
  ],
  imports: [
    BrowserModule,
   
    AppRoutingModule
  ],
  providers: [AuthGuard, ProductService, ConfirmDialogService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router){
    console.log('Routes: ', JSON.stringify(router.config, undefined,2));
  }
}
