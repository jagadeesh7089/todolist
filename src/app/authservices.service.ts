import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class AuthservicesService {
  
  authservice=false
  constructor() { }

  getlogin(){
    this.authservice=true
    return true
  }

  isLoggedin(){
    return this.authservice
  }

}
