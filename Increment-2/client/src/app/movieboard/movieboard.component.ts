import { Component, OnInit } from '@angular/core';
import {AuthenticationService, MovieDetails, UserDetails} from '../authentication.service';
import {AuthService} from "angular-6-social-login";

@Component({
  selector: 'app-movieboard',
  templateUrl: './movieboard.component.html',
  styleUrls: ['./movieboard.component.css']
})
export class MovieboardComponent implements OnInit {
  mdetails = [] as Array<MovieDetails>;
moviedetails = [];
  constructor(private auth: AuthenticationService, private socialAuthService: AuthService) { }

  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      console.log(user);
    });
    this.auth.movieboard().subscribe(
      (movie: any) => {
        console.log(movie);
        console.log(movie[0].m_name);
        this.mdetails = movie;
        console.log(typeof(this.mdetails));
      },
      err => {
        console.error(err);
      }
    );
  }

}
