import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
/*
import { AuthService } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
*/
import { OnInit } from '@angular/core';
import {
  AuthService,
  SocialUser,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angular-6-social-login';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  credentials: TokenPayload = {
    _id: '',
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  };
  public google_user: SocialUser;
  public google_loggedIn: boolean;

  // tslint:disable-next-line:max-line-length
  constructor(private auth: AuthenticationService, private router: Router, private socialAuthService: AuthService) {}
  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.google_user = user;
      this.google_loggedIn = (user != null);
    });
  }
  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    // tslint:disable-next-line:triple-equals
    if (socialPlatform == 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
      // tslint:disable-next-line:triple-equals
    } else if (socialPlatform == 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    console.log(this.google_user);
    console.log(this.google_loggedIn);
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        this.router.navigateByUrl('/movies');
        console.log(socialPlatform + ' sign in data : ' , userData);
        // Now sign-in with userData
        // ...
        console.log(this.google_user);
        console.log(this.google_loggedIn);

      }
    );
  }
  /*signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
*/login() {
    this.auth.login(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/movies');
      },
      err => {
        console.error(err);
      }
    );
  }
}
