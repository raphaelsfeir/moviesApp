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
      throw new Error('key-not-exists');
    } else {
      return mem;
    }
  }
  setMem(key: string, value: any) {
    return this._storage.set(key, value);
  }
  async initMem() {
    try {
      await this.getMem('saved');
    } catch (e) {
      this.setMem('saved', {movies: [], tv: []});
    }
  }
  async appendMem(key: string, add: any, type?: 'movies' | 'tv') {
    try {
      const mem = await this.getMem(key);
      if (mem[`${(!type) ? 'movies' : type}`].indexOf(add) < 0) {
        mem[`${(!type) ? 'movies' : type}`].push(add);
      }
      return this.setMem(key, mem);
    } catch (e) {
      this.initMem();
      const mem = await this.getMem(key);
      mem[`${(!type) ? 'movies' : type}`].push(add);
      return this.setMem(key, mem);
    }
  }
  async clearMem(key?: string, id?: number, type?: 'movies' | 'tv') {
    if (!key) {
      this._storage.clear();
    } else {
      try {
        const mem = await this.getMem(key);
        console.log(mem[`${(!type) ? 'movies' : type}`].indexOf(id));
        if (mem[`${(!type) ? 'movies' : type}`].indexOf(id) > 0) {
          mem[`${(!type) ? 'movies' : type}`].splice(mem[`${(!type) ? 'movies' : type}`].indexOf(id), 1);
        }
        return this.setMem(key, mem);
      } catch (e) {
        this.initMem();
      }
    }
  }
  async save(id: number, type?: 'movies' | 'tv') {
    try {
      await this.appendMem('saved', id, (!type) ? 'movies' : type);
      this._inter.toast('The movie has been saved');
    } catch (e) {
      console.error(e);
      this._inter.alert('Error', 'Error while saving the movie', ['Cancel']);
    }
  }
  async unsave(id: number, type?: 'movies' | 'tv') {
    try {
      await this.clearMem('saved', id, (!type) ? 'movies' : type);
      this._inter.toast('The movie has been removed from storage');
    } catch (e) {
      console.error(e);
      this._inter.alert('Error', 'Error while removing the movie', ['Cancel']);
    }
  }
  async getStatus(id: number, type: 'movies' | 'tv') {
    try {
      const list = await this.getMem('saved');
      return (list[`${type}`].indexOf(id) > 0) ? 'saved' : 'new';
    } catch (e) {
      return 'new';
    }
  }
}
