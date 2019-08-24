import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {ActivatedRoute} from '@angular/router';
import {SystemService} from '../services/system.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.page.html',
  styleUrls: ['./single.page.scss'],
})
export class SinglePage implements OnInit {

  single: any;
  id: number;
  status: 'saved' | 'new';

  constructor(private _api: ApiService, private _activ: ActivatedRoute, private _sys: SystemService) { }

  async ngOnInit() {
    this.id = +this._activ.snapshot.params.id;
    this._api.getSingle(this.id).subscribe(data => {
      this.single = data;
    });
    this.status = await this._sys.getStatus(this.id, 'movies');
    console.log(this.status);
  }

  async save() {
    await this._sys.save(this.id);
    this.status = await this._sys.getStatus(this.id, 'movies');
  }

  async unsave() {
    await this._sys.unsave(this.id);
    this.status = await this._sys.getStatus(this.id, 'movies');
  }

}
