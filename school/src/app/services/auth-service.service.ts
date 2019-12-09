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
    this.http.get(`${environment.externalSite}`)
      .subscribe(e => {
        this.isLoggedIn = true;
        this.router.navigate([`${callback}`])
      })
  }

  isLoggedIn = false
}
