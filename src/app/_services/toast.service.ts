import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) { }

  async penaltyToast() {
    const toast = await this.toastController.create({
      header: 'Penalty!',
      position: 'top',
      duration: 2250,
      showCloseButton: true,
      color: 'danger'
    });
    toast.present();
  }


  async computerToast() {
    const toast = await this.toastController.create({
      header: 'Computer Scored!',
      position: 'top',
      duration: 1500,
      showCloseButton: true,
      color: 'warning'
    });
    toast.present();
  }

  async htToast() {
    const toast = await this.toastController.create({
      header: 'HAT TRICK!',
      position: 'top',
      duration: 2250,
      showCloseButton: true,
      color: 'success'
    });
    toast.present();
  }

  async shgToast() {
    const toast = await this.toastController.create({
      header: 'SHORT HANDED GOAL!',
      position: 'top',
      duration: 2250,
      showCloseButton: true,
      color: 'success'
    });
    toast.present();
  }
}
