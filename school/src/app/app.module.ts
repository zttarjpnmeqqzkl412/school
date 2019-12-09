import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {routeConfig} from './config/router-config';
import { NotFoundComponent } from './components/NotFound/not-found/not-found.component';
import { HomeComponent } from './components/Home/home/home.component';
import { RedirectGuard } from './Guards/redirect-guard.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './Interceptors/auth-interceptor.service';
import { SingleSingOnComponent } from './components/single-sing-on/single-sing-on.component';
import { AuthServiceService } from './services/auth-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    SingleSingOnComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [
    RedirectGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
