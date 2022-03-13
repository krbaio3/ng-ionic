import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <css-header name="avatar" avatar="true" imgUrl="assets/images/goku.jpeg" imgName="Goku"></css-header>

    <ion-content>
      <ion-chip color="primary" outline="true" *ngFor="let item of items">
        <ion-avatar>
          <img [src]="item.img" [alt]="item.name">
        </ion-avatar>
        <ion-label>{{item.name}}</ion-label>
      </ion-chip>

      <hr class="ion-padding">

      <ion-list>
        <ion-item *ngFor="let item of items" class="custom-padding">
          <ion-avatar slot="start" >
            <img [src]="item.img" [alt]="item.name">
          </ion-avatar>
          <ion-label>{{item.name}}</ion-label>
        </ion-item>
      </ion-list>

    </ion-content>
  `,
  styles: [`
  .custom-padding {
    padding-bottom: 1rem;
  }

  .custom-padding:last-child {
    padding-bottom: 0;
  }

  `],
})
export class AvatarPage implements OnInit {

  public items: Dbz[] =[
    {
    img:'/assets/images/goku1.jpeg',
    name: 'Goku'
  },
    {
      img:'/assets/images/gohan.jpeg',
      name: 'Gohan'
    },
    {
      img:'/assets/images/piccolo.jpeg',
      name: 'Piccolo'
    }, {
      img: '/assets/images/trunks.jpeg',
      name: 'Trunks'
    },
    {
      img:'/assets/images/vegeta.jpeg',
      name: 'Vegeta'
    }];
  constructor() { }

  ngOnInit() {}

}

interface Dbz {
  name: string;
  img: string;
}
