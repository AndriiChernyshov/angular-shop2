import { Injectable } from '@angular/core';

import { LoginUser } from '../models/login-user.model';

@Injectable()
export class AuthService {

  private activeUser: LoginUser;

  constructor() { }

  doLogin(){
    this.activeUser = new LoginUser("abc", "p1");
  }

  isAdmin(): boolean{
    console.log(this.activeUser);
    if(this.activeUser)
      return true;
    return false;
  }

}
