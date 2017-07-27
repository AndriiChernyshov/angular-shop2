import { Injectable } from '@angular/core';

@Injectable()
export class ConfirmDialogService {

  constructor() { }

  public confirm(message? : string): Promise<boolean>{
    return new Promise<boolean>(resolve => {
      resolve(window.confirm(message || "Please confirm the operation"));
    })
  }
}
