import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  template: `
  <css-header name="List - Sliding"></css-header>

  <ion-content>
    <ion-list>
        <ion-item-sliding *ngFor="let user of users | async">
          <ion-item-options side="start">
            <ion-item-option color="danger" (click)="favorite(user)"><ion-icon slot="icon-only" name="heart"></ion-icon></ion-item-option>
            <ion-item-option color="primary" (click)="share(user)"><ion-icon slot="icon-only" name="share"></ion-icon></ion-item-option>
          </ion-item-options>

          <ion-item >
            <ion-label>
              <h3>{{user.name}}</h3>
              <p>{{user.email}}</p>
            </ion-label>
            <ion-label slot="end" class="ion-text-end small">{{user.phone}}</ion-label>
          </ion-item>

          <ion-item-options side="end">
            <ion-item-option color="medium" (click)="delete(user)"><ion-icon slot="icon-only" name="trash"></ion-icon></ion-item-option>
          </ion-item-options>

      </ion-item-sliding>
    </ion-list>
  </ion-content>

  `,
  styles: [`
    .small {
      font-size: 12px;
    }
  `],
})
export class ListPage implements OnInit {


  @ViewChild(IonList) ionList: IonList;

  public users: Observable<User>;

  constructor(private dataSrv: DataService) { }

  ngOnInit() {
    this.users = this.dataSrv.getUser();
  }

  public async favorite(user) {
    console.log('favorite', user);
    await this.ionList.closeSlidingItems();

  }
  public async share(user) {
    console.log('share', user);
    await this.ionList.closeSlidingItems();

  }

  public async delete(user) {
    console.log('delete', user.name);
    await this.ionList.closeSlidingItems();

  }

}
