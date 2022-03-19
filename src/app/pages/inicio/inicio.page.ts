import { Component } from '@angular/core';

@Component({
  selector: 'css-inicio',
  template: `
    <css-header name="Components" [regress]=false></css-header>
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

  public components: IComponent[] = [
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
    },
    {
      icon: 'radio-button-off',
      color: 'primary',
      name: 'Button',
      redirectTo: '/button'
    },
    {
      icon: 'card',
      color: 'primary',
      name: 'Card',
      redirectTo: '/card'
    },
    {
      icon: 'checkmark-circle',
      color: 'primary',
      name: 'Checkbox',
      redirectTo: '/checkbox'
    },
    {
      icon: 'calendar',
      color: 'primary',
      name: 'DateTime',
      redirectTo: '/date-time'
    },
    {
      icon: 'car',
      color: 'primary',
      name: 'Fab',
      redirectTo: '/fab'
    },
    {
      icon: 'grid',
      color: 'primary',
      name: 'Grid',
      redirectTo: '/grid'
    },
    {
      icon: 'infinite',
      color: 'primary',
      name: 'Scroll',
      redirectTo: '/scroll'
    },
    {
      icon: 'hammer',
      color: 'primary',
      name: 'Input Forms',
      redirectTo: '/input'
    },
    {
      icon: 'list',
      color: 'primary',
      name: 'List Sliding',
      redirectTo: '/list'
    }
  ];
}

interface IComponent {
  icon: string;
  color: string;
  name: string;
  redirectTo: string;
}
