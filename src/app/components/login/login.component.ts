import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { LoginUser } from '../../models/login-user.model';
import {AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() notifyAuthStateWasChanged: EventEmitter<void> = new EventEmitter<void>();

  public loginUser: LoginUser;

  loginForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService ) {

   }

  ngOnInit() {
    this.loginUser = this.authService.getActiveUser();
    
    this.buildLoginForm();
  }

  private buildLoginForm(): void{
    
    this.loginForm = this.formBuilder.group({
      'login': new FormControl( {value: this.loginUser.login, disabled: this.authService.isLoggedIn()} , 
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(12)
        ]),
      'email': new FormControl( { value: this.loginUser.email, disabled: this.authService.isLoggedIn()},
        [
          Validators.required,
          Validators.email
        ])
    });

   this.loginForm.valueChanges.subscribe(data => this.onValueChanged(data))

   this.onValueChanged();
  }

  private onValueChanged(data?: any):void{
    
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
    this.loginUser = this.loginForm.value;
    this.authService.saveLoginUser(this.loginUser);
     this.onValueChanged();
    //this.buildLoginForm();

    //TODO: how to apply this to Reactive Form?
    this.notifyAuthStateWasChanged.emit();//todo: who should pickup it?
  }

  private logout(): void{
    this.authService.clearLoginUser();
    this.loginUser = this.authService.getActiveUser();
     this.onValueChanged();
    //this.buildLoginForm();

    this.notifyAuthStateWasChanged.emit();
  }

}
