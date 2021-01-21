import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  //////////////////// Main Attributes ////////////////////
  characterName;
  strength;
  dexterity;
  mind;
  presence;
  damage;
  tenacity;

  //////////////////// Main Methods ////////////////////
  characterNameReceived(data) {
    this.characterName = data;
  }

  strengthReceived(data) {
    this.strength = data;
  }

  dexterityReceived(data) {
    this.dexterity = data;
  }

  mindReceived(data) {
    this.mind = data;
  }

  presenceReceived(data) {
    this.presence = data;
  }

  damageReceived(data) {
    this.damage = data;
  }

  tenacityReceived(data) {
    this.tenacity = data;
  }
}
