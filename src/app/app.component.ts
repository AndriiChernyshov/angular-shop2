import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  public title = 'app';
  public loginText: string;
  private isLoggedIn: boolean;

  constructor(
    public authService: AuthService ) {
   }

  ngOnInit() {
    console.log('ngOnInit');
    //Most important:
    //TODO: How to notify Parent component that user LogIn/LogOut
    //Actually I'm doing it from HTML via direct service's call. This initializes a lot of calls

  }
}
