import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  logIn(token, callback) {
    if (!this.isLoggedIn()) {
      this.http.get(`${environment.externalSite}`)
        .subscribe(e => {
          localStorage.setItem('token', 'value');
          if (!callback) 
            callback = "home"
          this.router.navigate([`${callback}`])
        })
      } else {
        if (!callback) 
            callback = "home"
          this.router.navigate([`${callback}`])
      }
  }

  isLoggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    }

    return false;
  }
}
