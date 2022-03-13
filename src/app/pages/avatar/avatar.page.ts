import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'css-avatar',
  template: `
    <css-header name="avatar" avatar="true" imgUrl="assets/images/goku.jpeg" imgName="Goku"></css-header>

    <ion-content>
      <ion-chip color="primary" outline="true">
        <ion-avatar>
          <img src="/assets/images/goku.jpeg" alt="Goku">
        </ion-avatar>
        <ion-label>Default</ion-label>
      </ion-chip>
    </ion-content>
  `,
  // styles: [``],
})
export class AvatarPage implements OnInit {

  constructor() { }

  ngOnInit() {}

}
