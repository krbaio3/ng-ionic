import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <css-header name="Grid"></css-header>
  <ion-content class="ion-padding" fullscreen>
    <ion-grid fixed>
      <ion-row>
        <ion-col
          size=12
          size-xs="12"
          size-sm="6"
          size-md= "4"
          size-lg="3"
          *ngFor="let item of data">
          <ion-card>
            <ion-img src="/assets/images/goku.jpeg"></ion-img>
          </ion-card>
          <ion-card-header>
            <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>
            <ion-card-title>Awesome Title</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe similique dolore quasi earum deleniti incidunt provident est aperiam, iste, tempore, labore asperiores optio delectus! Nisi possimus dolorum accusantium iusto quidem?
          </ion-card-content>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>

  `,
  // styles: [``],
})
export class GridPage implements OnInit {

  public data: any[] = Array(12);
  constructor() { }

  ngOnInit() {
  }

}
