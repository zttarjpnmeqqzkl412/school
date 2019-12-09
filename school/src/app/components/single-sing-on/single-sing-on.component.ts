import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-single-sing-on',
  templateUrl: './single-sing-on.component.html',
  styleUrls: ['./single-sing-on.component.scss']
})
export class SingleSingOnComponent implements OnInit {

  constructor(private authService: AuthServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      let { token, callback } = params;
      this.authService.logIn(token, callback);
    })

  }

}
