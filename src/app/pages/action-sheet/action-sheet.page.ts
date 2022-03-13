import { Component, OnInit }     from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'css-action-sheet',
  template: `
    <css-header name="Action Sheet"></css-header>
    <ion-content class="ion-padding">
    <ion-button (click)="presentActionSheet()" expand="block">
      Mostrar Action
    </ion-button>
    </ion-content>
  `,
  styles: [`
  .red {
    color: red;
  }`],
})
export class ActionSheetPage {

  constructor(public actionSheetCtrl: ActionSheetController) {}

  public async presentActionSheet() {
    const actionSheet: HTMLIonActionSheetElement = await this.actionSheetCtrl.create({
      header: 'Albums',
      backdropDismiss: false,
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        cssClass: 'red',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        data: 'Data value',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

}
