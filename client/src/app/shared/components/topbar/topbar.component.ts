import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { JwtToken } from '../../models/JwtToken.model';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit, OnDestroy {
  imageSrc: any = '../../../assets/images/logowikiretrogame.png';
  imageAlt = 'iPhone';

  constructor(private authService: AuthService) {
  }
  public jwtToken: JwtToken;
  public subscription: Subscription;


  ngOnInit(): void {
    this.authService.jwtToken.subscribe((jwtToken: JwtToken) => {
      this.jwtToken = jwtToken;
    });
  }

  public logout(): void {
    this.authService.logout();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
