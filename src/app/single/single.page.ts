import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.page.html',
  styleUrls: ['./single.page.scss'],
})
export class SinglePage implements OnInit {

  single: any;

  constructor(private _api: ApiService, private _activ: ActivatedRoute) { }

  ngOnInit() {
    const id = +this._activ.snapshot.params.id;
    this._api.getSingle(id).subscribe(data => {
      this.single = data;
    });
  }

  save() {

  }

}
