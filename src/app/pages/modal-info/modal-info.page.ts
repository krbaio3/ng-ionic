import { Component, Input } from '@angular/core';
import { ModalController }  from '@ionic/angular';

@Component({
  template: `
  <ion-header>
    <ion-toolbar>
      <ion-title>Modal Page</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <h3>{{name}}</h3>
    <h3>{{country}}</h3>
    <ion-button (click)="exitWithoutArguments()" expand="block">Exit Without Arguments</ion-button>
    <ion-button (click)="exitWithArguments()" expand="block">Exit With Arguments</ion-button>
  </ion-content>
  `,
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage {

  @Input() name = '';
  @Input() country = '';

  constructor(private modalCtrl: ModalController) { }

  public async exitWithoutArguments() {
    await this.modalCtrl.dismiss();
  }

  public async exitWithArguments() {
    await this.modalCtrl.dismiss({
      name: 'Tomas Joaquin',
      pais: 'Andorra'
    });
  }

}
