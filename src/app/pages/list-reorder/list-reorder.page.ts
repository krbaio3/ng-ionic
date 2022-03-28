import { Component } from '@angular/core';

@Component({
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/" color="primary"></ion-back-button>
        </ion-buttons>

        <ion-title color="primary"> List - Reorder</ion-title>

        <ion-buttons slot="end">
          <ion-button (click)="toggleReorder()">Toggle</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-reorder-group (ionItemReorder)="doReorder($event)" [disabled]="reorderDisabled">
        <ion-item *ngFor="let personaje of personajes">
          <ion-label> {{personaje}}</ion-label>
          <ion-reorder slot="end">
            <ion-icon name="pizza"></ion-icon>
          </ion-reorder>
        </ion-item>
        </ion-reorder-group>
      </ion-list>
    </ion-content>
  `,
  // styles: [``],
})
export class ListReorderPage {

  public personajes: string[] = ['Aqua man', 'Superman', 'Batman', 'Wonder Woman', 'Flash'];
  public reorderDisabled = true;

  constructor() { }

  public doReorder(event: any) {

    console.log(event);
    const itemMove = this.personajes.splice(event.detail.from,1)[0];
    this.personajes.splice(event.detail.to, 0, itemMove);

    event.detail.complete();
    console.log(this.personajes);
  }

  public toggleReorder() {
    this.reorderDisabled = !this.reorderDisabled;
  }

}
