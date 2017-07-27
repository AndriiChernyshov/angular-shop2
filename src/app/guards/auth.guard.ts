import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(public authService: AuthService){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('canActive');
      return false;
  }

  canLoad(route: Route): boolean{
    console.log('canLoad');
    const url = `/${route.path}`;
    return this.checkLogin(url);
  }

  
  private checkLogin(url: string): boolean {
    return this.authService.isAdmin();
  }
}
