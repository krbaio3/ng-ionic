import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'css-header',
  template: `
    <ion-header>
      <ion-toolbar>
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
export class HeaderComponent implements OnInit {

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

  ngOnInit() {
  }

}
