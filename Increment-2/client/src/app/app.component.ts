import {Component, OnInit} from '@angular/core'
import { AuthenticationService } from './authentication.service'
import {AuthService, SocialUser} from 'angular-6-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private gooogle_user: SocialUser;
  private gooogle_loggedIn: boolean;
  constructor(public auth: AuthenticationService, private socialAuthService: AuthService) {}
  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.gooogle_user = user;
      this.gooogle_loggedIn = (user != null);
      console.log(user);
    });
  }
}
