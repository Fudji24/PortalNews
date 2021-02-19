import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router, UrlTree
} from '@angular/router';
import { AuthService } from '../http/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.checkAccess();
  }

  private checkAccess(): Promise<boolean | UrlTree> {
    return new Promise<boolean | UrlTree>(async (resolve) => {

      const isLoggedIn = await this.authService.isAuthenticated();
      resolve(!isLoggedIn ? true : this.router.createUrlTree(['/admin']));
    });
  }
}
