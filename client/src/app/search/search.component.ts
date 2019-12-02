import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {AuthenticationService, MovieDetails} from "../authentication.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private auth: AuthenticationService, private route: ActivatedRoute) { }
  public mdetails1 = [] as Array<MovieDetails>;
  public mdetails = [];
 public pname: string;
  ngOnInit() {
    const routeparams = this.route.snapshot.params;
    this.pname = routeparams.name;
    console.log(routeparams.name);
    this.auth.details(this.pname).subscribe(
      (movie: any) => {
        console.log(movie);
        console.log('movie[0].m_name');
        this.mdetails = movie;
        console.log(this.mdetails);
        console.log(typeof (this.mdetails));
      },
      err => {
        console.error(err);
      }
    );

  }
}
