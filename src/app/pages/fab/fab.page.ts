import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <css-header name="fab"></css-header>

  <ion-content>

  <!-- fab placed to the top end -->
  <!-- <ion-fab vertical="bottom" horizontal="end" slot="fixed">
    <ion-fab-button>
      <ion-icon name="add"></ion-icon>
    </ion-fab-button>
  </ion-fab> -->

  <ion-fab vertical="bottom" horizontal="end" slot="fixed">
    <ion-fab-button>
      <ion-icon name="add"></ion-icon>
    </ion-fab-button>

    <ion-fab-list side="top">
      <ion-fab-button color="facebook"><ion-icon name="logo-facebook"></ion-icon></ion-fab-button>
      <ion-fab-button color="twitter"><ion-icon name="logo-twitter"></ion-icon></ion-fab-button>
      <ion-fab-button color="youtube"><ion-icon name="logo-youtube"></ion-icon></ion-fab-button>
    </ion-fab-list>

    <ion-fab-list side="start">
      <ion-fab-button color="whatsapp"><ion-icon name="logo-whatsapp"></ion-icon></ion-fab-button>
      <ion-fab-button color="google"><ion-icon name="logo-google"></ion-icon></ion-fab-button>
      <ion-fab-button color="github"><ion-icon name="logo-github"></ion-icon></ion-fab-button>
    </ion-fab-list>
  </ion-fab>

    <ion-list>
      <ion-item *ngFor="let item of data; let i = index">
        <ion-label>
        Item {{i + 1}}
        </ion-label>
      </ion-item>
    </ion-list>
  </ion-content>

  <ion-footer>
    <ion-toolbar>
      <ion-title>Footer</ion-title>
    </ion-toolbar>
  </ion-footer>
  `,
  styles: [`
  .p {
    background: black;
  }
  `],
})
export class FabPage implements OnInit {

  public data: any[]= Array(100);

  constructor() { }

  ngOnInit() {
  }

}
