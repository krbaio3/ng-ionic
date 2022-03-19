import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  template: `
  <css-header [name]="name || 'Input Forms'"></css-header>

  <ion-content class="ion-padding">
  <ion-list>
    <ion-input type="text" placeholder="Awesome Input"
    value="Custom"></ion-input>
    <!-- Default Input -->
    <ion-input></ion-input>

    <!-- Input with value -->
    <ion-input value="custom"></ion-input>

    <!-- Input with placeholder -->
    <ion-input placeholder="Enter Input"></ion-input>

    <!-- Input with clear button when there is a value -->
    <ion-input clearInput value="clear me"></ion-input>

    <!-- Number type input -->
    <ion-input type="number" value="333"></ion-input>

    <!-- Disabled input -->
    <ion-input value="Disabled" disabled></ion-input>

    <!-- Readonly input -->
    <ion-input value="Readonly" readonly></ion-input>

    <!-- Inputs with labels -->
    <ion-item>
      <ion-label>Default Label</ion-label>
      <ion-input></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="floating">Floating Label</ion-label>
      <ion-input></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="fixed">Fixed Label</ion-label>
      <ion-input></ion-input>
    </ion-item>

    <ion-item>
      <ion-label position="stacked">Stacked Label</ion-label>
      <ion-input></ion-input>
    </ion-item>

    <ion-list-header>
        <ion-label>New This Week</ion-label>
        <ion-button>See All</ion-button>
      </ion-list-header>

      <ion-item>
        <ion-label>Name:</ion-label>
        <ion-input type="text" placeholder="Awesome Input" [(ngModel)]="name"></ion-input>
      </ion-item>
    </ion-list>

    <h2>ADVANCED</h2>

    <form #formulario="ngForm" (ngSubmit)="onSubmit(formulario)">
      <ion-list-header>
        <ion-label>Formulario valido: {{formulario.valid }}</ion-label>
      </ion-list-header>

      <ion-item>
        <ion-label>Email:submit</ion-label>
        <ion-input
          type="email"
          placeholder="Email"
          name="email"
          [(ngModel)]="user.email"
          pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          required
        ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label>Password: </ion-label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          [(ngModel)]="user.password"
          required
        >
      </ion-item>
      <ion-button type="submit" expand="block"  shape="round" >
        Login
      </ion-button>
    </form>
  </ion-content>
  `,
})
export class InputPage {
  public name = 'Jorge';

  public user = {
    password: '',
    email: '',
  };

  onSubmit(formulario: NgForm) {
    console.log(formulario);
  }

}
