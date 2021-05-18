import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    slideInAnimation

  ]
})
export class AppComponent {
  constructor(private authService: AuthService) { }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
