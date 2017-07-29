import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LoginUser } from '../../models/login-user.model';
import {AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginUser: LoginUser;

  loginForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService ) {

   }

  ngOnInit() {
    this.loginUser = this.authService.getActiveUser();
    if(!this.loginUser)
      this.loginUser = new LoginUser('', '');
    console.log(this.loginUser);
    this.buildLoginForm();
  }

  private buildLoginForm(): void{
    
    console.log(this.formBuilder);
    this.loginForm = this.formBuilder.group({
      'login': [ 'abc', 
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(12)
        ]],
      'email': ['xyz',
        [
          Validators.required,
          Validators.email
        ]
      ]
    });

   this.loginForm.valueChanges.subscribe(data => this.onValueChanged(data))

   this.onValueChanged();
  }

  private onValueChanged(data?: any):void{
    console.log(data);
    if(!this.loginForm){
      return;
    }

    for(const field in this.formError){
      this.formError[field] = '';
      const control = this.loginForm.get(field);

      if(control && control.dirty && !control.valid){
        for(const key in control.errors){
          this.formError[field] += key;
        }
      }
    }
  }

  formError = {
    'login': '',
    'email': ''
  }

  private login() : void{

  }

  private logout(): void{
    
  }

}
