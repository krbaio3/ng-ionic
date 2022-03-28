import { Component, Input } from '@angular/core';

@Component({
  selector: 'css-header',
  template: `
    <ion-header class="ion-no-border" translucent>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button menu="first" color="primary"></ion-menu-button>
        </ion-buttons>

        <ion-buttons slot="end" *ngIf="regress">
          <ion-back-button
            defaultHref="/"
            text="Regress"
            color="primary"
          ></ion-back-button>
        </ion-buttons>

        <ion-title>{{name | titlecase}}</ion-title>

        <ion-buttons *ngIf="avatar">
          <ion-avatar>
            <img [src]="imgUrl" [alt]="imgName" />
          </ion-avatar>
        </ion-buttons>

      </ion-toolbar>
    </ion-header>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Input()
  public name: string;

  @Input()
  public avatar: boolean;

  @Input()
  public imgUrl: string;

  @Input()
  public imgName: string;

  @Input()
  public regress: boolean;

  constructor() {
    this.name = '';
    this.avatar = false;
    this.imgUrl = '';
    this.regress= true;
  }
}
