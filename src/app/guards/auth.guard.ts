import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    public router: Router,
    public authService: AuthService){

  }

  canActivate(
    roote: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
   
      console.log('canActive');
      
    const url:string = state.url;

    return this.checkLogin(url);
  }

  canLoad(route: Route): boolean{
    console.log('canLoad');
    return true;
  }

  
  private checkLogin(url: string): boolean {
    console.log('checkLogin guard');
    if(this.authService.isAdmin()){
      return true;
    }
    this.router.navigate(['/login']);
  }
}
