import { Injectable } from '@angular/core';
import {HTTP} from '@ionic-native/http/ngx';
import {HttpClient} from '@angular/common/http';
import {CredentialsService} from './credentials.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HTTP, private http: HttpClient, private _cred: CredentialsService) { }

  list = this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=' + this._cred.TMD_API_KEY + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');

  getSingle(id: number, type?: 'movie' | 'tv') {
    if (type === 'movie' || !type) {
      return this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + this._cred.TMD_API_KEY + '&language=en-US');
    }
  }

}
