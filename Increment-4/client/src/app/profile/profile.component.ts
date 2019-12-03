import {Component, OnInit} from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
import {AuthService, SocialUser} from "angular-6-social-login";

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit{
  details: UserDetails;
  public google_user: SocialUser;


  constructor(private auth: AuthenticationService, private socialAuthService: AuthService) {}

  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      console.log(user);
      this.google_user = user;
    });
    this.auth.profile().subscribe(
      user => {
        this.details = user;

      },
      err => {
        console.error(err);
      }
    );
  }
}
