import { Component }       from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage }   from '../modal-info/modal-info.page';

@Component({
  template: `
    <css-header name="modal"></css-header>
    <ion-content class="ion-padding">
      <ion-button (click)="showModal()" expand="block">Mostrar Modal</ion-button>
    </ion-content>
  `,
})
export class ModalPage {

  constructor(private modalCtrl: ModalController) { }

  public async showModal() {
    console.log('entra');
      const modal = await this.modalCtrl.create({
        component: ModalInfoPage,
        componentProps: {
          name: 'Jorge',
          country: 'Spain'
        }
      });
      await modal.present();

      const { data } = await modal.onDidDismiss();
      // const { data } = await modal.onWillDismiss();

    console.log(data);
  }
}
