import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { MyserviceService } from './myservice.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public auth: MyserviceService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      window.alert('Please login again, token is missing or not valid');
      return false;
    }
    return true;
  }
}