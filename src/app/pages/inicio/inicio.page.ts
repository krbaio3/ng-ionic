import { Component } from '@angular/core';

@Component({
  selector: 'css-inicio',
  template: `
    <css-header name="Componentes"></css-header>
    <ion-content>

      <ion-list>
        <ion-item *ngFor="let component of components" [routerLink]="component.redirectTo" detail>
          <ion-icon [name]="component.icon" slot="start" [color]="component.color"></ion-icon>
          <span>{{component.name}}</span>
        </ion-item>
      </ion-list>
      <!--      <ion-button routerLink="/alert">-->
      <!--        Alert-->
      <!--      </ion-button>-->
      <!--      <ion-button routerLink="/action-sheet">-->
      <!--        Action Sheet-->
      <!--      </ion-button>-->
    </ion-content>
  `
})
export class InicioPage {

  public components: Componente[] = [
    {
      icon: 'american-football',
      color: 'primary',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'logo-apple-appstore',
      color: 'primary',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker',
      color: 'primary',
      name: 'Avatar',
      redirectTo: '/avatar'
    }
  ];

  constructor() { }

}

interface Componente {
  icon: string;
  color: string;
  name: string;
  redirectTo: string;
}
