import { NotFoundComponent } from '../components/NotFound/not-found/not-found.component';
import { HomeComponent } from '../components/Home/home/home.component';
import { RedirectGuard } from '../Guards/redirect-guard.service';
import { SingleSingOnComponent } from '../components/single-sing-on/single-sing-on.component';


export const routeConfig = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [RedirectGuard]
  },
  {
    path: 'sso',
    component: SingleSingOnComponent
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
]