import { Injectable } from '@angular/core';
import {AlertController, ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class InterfaceService {

  constructor(private _alert: AlertController, private _toast: ToastController) { }

  async alert(title: string, msg: string, btns: any[]) {
    const alert = await this._alert.create({
      header: title,
      message: msg,
      buttons: btns
    });
    alert.present();
  }

  async toast(msg: string) {
    const toast = await this._toast.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
