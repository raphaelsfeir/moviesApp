import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import {InterfaceService} from './interface.service';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  constructor(private _storage: Storage, private _inter: InterfaceService) { }

  async getMem(key: string) {
    const mem = await this._storage.get(key);
    if (!mem) {
      throw new Error('The key doesn\'t exist !');
    }
  }
  setMem(key: string, value: any) {
    return this._storage.set(key, value);
  }
  async initMem() {
    try {
      await this.getMem('saved');
    } catch (e) {
      this.setMem('saved', []);
    }
  }
  async appendMem(key: string, add: any) {
    const old = await this.getMem(key);
    return this.setMem(key, [old, add]);
  }


  async save(id: number, type?: 'movies' | 'tv') {
    try {
      await this.appendMem((!type) ? 'movies' : type, id);
      this._inter.toast('The movie has been saved');
    } catch (e) {
      console.error(e);
      this._inter.alert('Error', 'Error while saving the movie', ['Cancel']);
    }
  }
  async getStatus(id: number) {
    return 'saved';
  }
}
