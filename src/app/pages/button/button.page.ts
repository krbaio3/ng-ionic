import { Component } from '@angular/core';

@Component({
  template: `
    <ion-header translucent>
      <ion-toolbar>

        <ion-buttons slot="start">
          <ion-back-button
            defaultHref="/"
            text="Regress"
            color="primary"
          ></ion-back-button>
        </ion-buttons>

        <ion-title color="primary">Buttons</ion-title>

        <!--   END toolbar     -->
        <ion-buttons slot="end">
          <ion-button (click)="handlerClick()">
            <ion-icon slot="icon-only" [name]="favorite ? 'heart-outline' : 'heart'" color="danger"></ion-icon>
          </ion-button>
        </ion-buttons>

      </ion-toolbar>
    </ion-header>

    <ion-content fullscreen class="ion-padding">
      <h3>Default</h3>
      <ion-button>Default</ion-button>

      <h3>Anchor</h3>
      <ion-button href="#">Anchor</ion-button>

      <h3>Colors</h3>
      <ion-button color="primary">Primary</ion-button>
      <ion-button color="secondary">Secondary</ion-button>
      <ion-button color="tertiary">Tertiary</ion-button>
      <ion-button color="success">Success</ion-button>
      <ion-button color="warning">Warning</ion-button>
      <ion-button color="danger">Danger</ion-button>
      <ion-button color="light">Light</ion-button>
      <ion-button color="medium">Medium</ion-button>
      <ion-button color="dark">Dark</ion-button>

      <h3>Expand</h3>
      <ion-button expand="full">Full Button</ion-button>
      <ion-button expand="block">Block Button</ion-button>

      <h3>Round</h3>
      <ion-button shape="round">Round Button</ion-button>

      <h3>Fill</h3>
      <ion-button expand="full" fill="outline">Outline + Full</ion-button>
      <ion-button expand="block" fill="outline">Outline + Block</ion-button>
      <ion-button shape="round" fill="outline">Outline + Round</ion-button>

      <h3>Icons</h3>
      <ion-button>
        <ion-icon slot="start" name="star"></ion-icon>
        Left Icon
      </ion-button>

      <ion-button>
        Right Icon
        <ion-icon slot="end" name="star"></ion-icon>
      </ion-button>

      <ion-button>
        <ion-icon slot="icon-only" name="star"></ion-icon>
      </ion-button>

      <h3>Sizes</h3>
      <ion-button size="large">Large</ion-button>
      <ion-button>Default</ion-button>
      <ion-button size="small">Small</ion-button>

      <a href="https://ionicframework.com/docs/api/button" class="ion-padding"><strong>Documentation</strong></a>
    </ion-content>
  `,
  // styles: [``],
})
export class ButtonPage {

  public favorite = false;

  constructor() { }

  handlerClick(): void {
    this.favorite = !this.favorite;
  }
}
