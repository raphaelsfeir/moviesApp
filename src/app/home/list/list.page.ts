import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  list: any[];

  constructor(private _api: ApiService) { }

  ngOnInit() {
    this._api.list.then(data => {
      console.log(data.data);
      this.list = JSON.parse(data.data.toString()).results;
      console.log('Films : ', this.list);
    });
  }

}
