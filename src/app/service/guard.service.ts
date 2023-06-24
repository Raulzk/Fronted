import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private lService: LoginService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    //return this.lService.verificar();
    const rpta = this.lService.verificar();
    if (!rpta) {
      this.router.navigate(['/login']);
      return false;
    }
    return rpta;
  }
}
