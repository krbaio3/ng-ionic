import { Component } from '@angular/core';

@Component({
  template: `
    <css-header name="card"></css-header>
    <ion-content fullscreen="true">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Card Title</ion-card-title>
          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          When Chuck Norris sends in his taxes, he sends blank forms and includes only a picture of himself, crouched and ready to attack.
          Chuck Norris has not had to pay taxes, ever.
          Chuck Norris counted to infinity - twice.
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-item color="primary">
          <ion-icon slot="start" name="pin-outline" ></ion-icon>
          <ion-label>Marcador</ion-label>
        </ion-item>

        <ion-card-content>
          It wasnt a nuclear bomb that destroyed the japanese, it was chuck norris, Chuck Norris is the reason why Waldo is hiding.
          The leading causes of death in the United States are: 1. Heart Disease 2. Chuck Norris 3. Cancer.
          Chuck Norris' hand is the only hand that can beat a Royal Flush Ninja's are cool huh? NOPE! Chuck Norris looks like a ninja and makes ninja's look like Girl Scouts.
        </ion-card-content>
      </ion-card>

      <ion-card>
        <img src="https://i.ytimg.com/vi/JAsYy9TQ_3c/maxresdefault.jpg" alt="">
        <ion-card-content>
          Vincent Valentine es un ser atormentado por un sentimiento de culpabilidad que yace en el sótano de la mansión Shin-Ra. Anteriormente fue miembro de Los Turcos, una de las fuerzas especiales de Shin-Ra. Vincent se enamoró de una científica llamada Lucrecia Crescent, ayudante de Grimoire Valentine (padre de Vincent), sentimiento que también sentía Lucrecia, aunque nunca lo aceptó completamente.
        </ion-card-content>
      </ion-card>
    </ion-content>
  `,
  // styles: [``],
})
export class CardPage {

  constructor() { }


}
