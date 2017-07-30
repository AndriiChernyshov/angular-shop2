import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { LoginUser } from '../models/login-user.model';


const _adminName: string = 'Admin';

@Injectable()
export class AuthService {

  private activeUser: LoginUser;
  //private activeUserSource = new Subject<LoginUser>();
  //activeUser$ = this.activeUserSource.asObservable();

  constructor() { }

  public getActiveUser(): LoginUser {
    var userSerialized = localStorage.getItem('loginUser');
    if (userSerialized != undefined && userSerialized != null) {
      this.activeUser = JSON.parse(userSerialized);
    }
    if(this.activeUser === undefined)
      this.activeUser = new LoginUser('', '');

    return this.activeUser; 
  }

  public saveLoginUser(user: LoginUser): void {
    if(user === undefined)
      return;

    this.activeUser = user;
    var userSerialized = JSON.stringify(user);
    localStorage.setItem('loginUser', userSerialized);
    //this.activeUserSource.next(this.activeUser)
  }

  public clearLoginUser(): void {
    this.activeUser = new LoginUser('', '');
    localStorage.removeItem('loginUser');
  }

  public isAdmin(): boolean {


    console.log('isAdmin');//TODO: why it is colled twice?
    this.activeUser = this.getActiveUser();
    if (this.activeUser === undefined)
      return false;

    return this.activeUser.login === _adminName;
  }

  public isLoggedIn(): boolean{
    //this.activeUser = this.getActiveUser();
    if(this.activeUser === undefined || this.activeUser.login.length == 0 || this.activeUser.email.length == 0)
      return false;
    return true;
  }

}
