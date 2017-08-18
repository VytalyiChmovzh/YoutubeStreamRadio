import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable()
export class NonauthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean {

    if (!this.authService.isAuthorized()) {
      return true;
    }

    this.router.navigate(['app']);
    return false;
  }
}
