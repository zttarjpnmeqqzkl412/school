import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthServiceService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
     return this.redirect(state);
  }

  redirect(state) {
    if (environment.mockExternalSite) { 
      if (state.url !== "/sso") {
        if (!this.authService.isLoggedIn) {
          this.router.navigate(['/sso'], { 
            queryParams : {
              token: 'mauricio',
              callback: `${state.url}`
            }
          }) 
          return false
        } else {
          return true
        }
      } else {
        return true
      }
    } else {
      window.location.href = `${environment.externalSite}?callback=${encodeURIComponent(state.url)}`
      return false;
    }
  }
}
