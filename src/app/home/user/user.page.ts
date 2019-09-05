import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  list = {movies: [], tv: []};
  loading: boolean;

  constructor(private _api: ApiService) {
    this.loading = true;
  }

  ngOnInit() {
    this._api.getLocal().subscribe(l => {
      this.loading = false;
      this.list.movies = this._api.arrayToDetails(l.movies, 'movie');
      this.list.tv = this._api.arrayToDetails(l.tv, 'tv');
    });
  }

}
