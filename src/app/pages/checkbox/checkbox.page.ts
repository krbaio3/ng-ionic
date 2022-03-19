import { Component, } from '@angular/core';

@Component({
  template: `
  <css-header name="checkbox"></css-header>

  <ion-content fullscreen class="ion-padding">

  <h3>Default Checkbox</h3>
    <ion-item>
      <ion-checkbox></ion-checkbox>
      <ion-label>Default Checkbox</ion-label>
    </ion-item>


  <h3>Disabled Checkbox</h3>
    <ion-item>
      <ion-checkbox disabled="true"></ion-checkbox>
      <ion-label>Disabled Checkbox</ion-label>
    </ion-item>



  <h3>Checked Checkbox</h3>
    <ion-item>
      <ion-checkbox checked="true"></ion-checkbox>
      <ion-label>Checked Checkbox</ion-label>
    </ion-item>


  <h3>Checkbox Colors</h3>
    <ion-item>
      <ion-checkbox color="primary"></ion-checkbox>
      <ion-label>primary</ion-label>
    </ion-item>
    <ion-item>
      <ion-checkbox color="secondary"></ion-checkbox>
      <ion-label>secondary</ion-label>
    </ion-item>
    <ion-item>
      <ion-checkbox color="danger"></ion-checkbox>
      <ion-label>danger</ion-label>
    </ion-item>
    <ion-item>
      <ion-checkbox color="light"></ion-checkbox>
      <ion-label>light</ion-label>
    </ion-item>
    <ion-item>
      <ion-checkbox color="dark"></ion-checkbox>
      <ion-label>dark</ion-label>
    </ion-item>

    <h3>Checkbox Slot</h3>
    <ion-item>
      <ion-checkbox slot="end" color="primary"></ion-checkbox>
      <ion-label>Checkbox End</ion-label>
    </ion-item>

    <ion-item>
      <ion-checkbox slot="start" color="secondary"></ion-checkbox>
      <ion-label>Checkbox Start</ion-label>
    </ion-item>

    <hr class="ion-padding">

    <h3>Checkbox handler</h3>
    <ion-item *ngFor="let d of data" (click)="handlerClick(d)">
      <ion-label>{{d.name}}</ion-label>
      <ion-checkbox slot="end" [color]="d.name" [(ngModel)]="d.selected"></ion-checkbox>
    </ion-item>
    <hr class="ion-padding">
    <samp >
      <span>Is selected:</span> {{this.isSelected | json}}
    </samp>
    <hr class="ion-padding">
    <ion-button type="button" (click)="handlerShowData()" class="ion-padding" expand="block">Show Data Object</ion-button>
    <hr class="ion-padding">
    <samp *ngIf="showData">
      {{this.data | json}}
    </samp>
    <hr class="ion-padding">

    <a href="https://ionicframework.com/docs/api/checkbox" ><strong>Documentation</strong></a>
  </ion-content>


  `,
  // styles: [``],
})
export class CheckboxPage {

  public data: CheckData[] = [
    { name: 'primary', selected: false },
    { name: 'secondary', selected: true },
    { name: 'tertiary', selected: false },
    { name: 'success', selected: true }
  ];

  public isSelected: CheckData =null;
  public showData =false;

  constructor() { }


  handlerClick(d: CheckData): void {
    this.isSelected = d;
    console.log(this.isSelected);
  }

  handlerShowData() {
    console.log(this.data);
    this.showData = true;
  }
}

interface CheckData {
  name: string;
  selected: boolean;
}
