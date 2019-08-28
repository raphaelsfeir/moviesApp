import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  list: any[];
  loading: boolean;

  constructor(private _api: ApiService) {
    this.loading = true;
  }

  ngOnInit() {
    this._api.list.subscribe(data => {
      this.list = data['results'];
      this.loading = false;
      console.log('Films : ', this.list);
    });
  }

}
