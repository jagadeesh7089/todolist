import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthservicesService } from './authservices.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

      constructor(private authservice:AuthservicesService,private route:Router){}

      canActivate():boolean{
        if(this.authservice.isLoggedin()){
          return true
        }
        else {
          this.route.navigate(['login'])
          return false
        }
      } 
          
    
}