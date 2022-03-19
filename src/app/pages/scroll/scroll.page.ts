import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  template: `
  <css-header name="inifite scroll"></css-header>
  <ion-content>
    <ion-list>
      <ion-item *ngFor="let item of data; let i = index">
        <ion-label>item {{ i + 1 }}</ion-label>
      </ion-item>
    </ion-list>

    <ion-infinite-scroll threshold="5%" position="bottom" (ionInfinite)="loadData($event)">
      <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data...">
      </ion-infinite-scroll-content>
    </ion-infinite-scroll>
  `,
})
export class ScrollPage {

  @ViewChild(IonInfiniteScroll) public infiniteScroll: IonInfiniteScroll;
  public data: any[] = Array(20);

  public loadData(event) {
    console.log(event);

    setTimeout(() => {

      if (this.data.length > 50) {
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
        return;
      }
      const newArr = Array(20);
      this.data.push(...newArr);
    // event.target.complete();
      this.infiniteScroll.complete();
  }, 1500);

  }

}
