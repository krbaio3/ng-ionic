import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <css-header name="date time"></css-header>

  <ion-content>
    <ion-list>
      <ion-list-header>
        <ion-label>Datos de Nacimiento</ion-label>
      </ion-list-header>

      <ion-item>
        <ion-label>Fecha de Nacimiento</ion-label>
        <ion-input
          value="{{ dateBirthday | date: 'dd/MM/yyyy' }}"
          id="date"
          class="ion-text-end"
        ></ion-input>
        <ion-popover trigger="date" size="cover">
          <ng-template>
            <ion-datetime
              presentation="date"
              [(ngModel)]="dateBirthday"
              (ionChange)="handlerChangeEvent($event)"
              locale="es-ES"
            ></ion-datetime>
          </ng-template>
        </ion-popover>
      </ion-item>

      <ion-list-header>
        <ion-label>Restrictions</ion-label>
      </ion-list-header>

      <ion-item>
        <ion-label>Min and Max</ion-label>
        <ion-input
          value="{{ newDate | date: 'dd/MM/yyyy' }}"
          id="date"
          class="ion-text-end"
        ></ion-input>
        <ion-popover trigger="date" size="cover">
          <ng-template>
            <ion-datetime
              presentation="date"
              [(ngModel)]="dateBirthday"
              (ionChange)="handlerChangeEvent($event)"
              min="2022"
              max="2023"
            ></ion-datetime>
          </ng-template>
        </ion-popover>
      </ion-item>

    </ion-list>

  </ion-content>

  `,
  // styles: [``],
})
export class DateTimePage implements OnInit {

  public dateBirthday: string = new Date().toISOString();
  public newDate: string = new Date().toISOString();
  constructor() { }

  ngOnInit() {
  }

  handlerChangeEvent(event: any): void {
    console.log(event);
    console.log(new Date(event.detail.value));
  }
}
