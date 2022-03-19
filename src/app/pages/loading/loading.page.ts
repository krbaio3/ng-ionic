import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  template: `
    <css-header name="loading"></css-header>

    <ion-content class="ion-padding">
      <ion-button (click)="showLoading()" expand="block">
        Mostrar Loading
      </ion-button>
    </ion-content>
  `,
  // styles: [``],
})
export class LoadingPage implements OnInit {

  public loading: HTMLIonLoadingElement;

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  public async showLoading() {
    await this.presentLoading();
    setTimeout(()=> {
      this.loading.dismiss();
    }, 2000);
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      // cssClass: 'my-custom-class',
      message: 'Please wait...',
      // duration: 2000
    });
    await this.loading.present();

    // const { role, data } = await loading.onDidDismiss();
    // console.log('Loading dismissed!', role, data);
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingCtrl.create({
      spinner: null,
      duration: 5000,
      message: 'Click the backdrop to dismiss early...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  }
}
