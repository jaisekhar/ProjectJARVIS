import {Injectable, OnInit} from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import {AuthService, SocialUser} from "angular-6-social-login";

@Injectable()
export class AuthGuardService implements CanActivate, OnInit {
  public ggoogle_user: SocialUser;
  public ggoogle_loggedIn: boolean;

  constructor(private auth: AuthenticationService, private router: Router, private socialAuthService: AuthService) {}
  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      console.log(user);
      this.ggoogle_user = user;
      this.ggoogle_loggedIn = (user != null);
    });
  }
  canActivate() {
    if (!this.auth.isLoggedIn() || !this.ggoogle_loggedIn) {
      console.log((this.ggoogle_user));
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }
}
