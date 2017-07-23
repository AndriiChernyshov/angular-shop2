import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';


import { AppRoutingModule, appRouterComponents } from './app.routing.module';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    appRouterComponents
  ],
  imports: [
    BrowserModule,
   
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router){
    console.log('Routes: ', JSON.stringify(router.config, undefined,2));
  }
}
