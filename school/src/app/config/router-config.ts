import { NotFoundComponent } from '../components/NotFound/not-found/not-found.component';
import { HomeComponent } from '../components/Home/home/home.component';
import { RedirectGuard } from '../Guards/redirect-guard.service';
import { SingleSingOnComponent } from '../components/single-sing-on/single-sing-on.component';


export const routeConfig = [
  {
    path: 'sso',
    component: SingleSingOnComponent
  },
  { path: '', canActivate: [RedirectGuard], children: [
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: '**',
      component: NotFoundComponent,
    }
  ]}
]