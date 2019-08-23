import { Injectable } from '@angular/core';
import {HTTP} from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  list = this._http.get('https://api.themoviedb.org/3/discover/movie?api_key=92dc161fb4161c389e7598ff956b454a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1', {}, {});

  constructor(private _http: HTTP) { }

  getSingle(id: number, type?: 'movie' | 'tv') {
    if (type === 'movie' || !type) {
      return this._http.get('https://api.themoviedb.org/3/movie/' + id + '/?apikey=92dc161fb4161c389e7598ff956b454a&language=en-US');
    }
  }

}
