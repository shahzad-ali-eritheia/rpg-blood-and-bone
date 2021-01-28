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
  characterNameReceived(data): void {
    this.characterName = data;
  }

  strengthReceived(data): void {
    this.strength = data;
  }

  dexterityReceived(data): void {
    this.dexterity = data;
  }

  mindReceived(data): void {
    this.mind = data;
  }

  presenceReceived(data): void {
    this.presence = data;
  }

  damageReceived(data): void {
    this.damage = data;
  }

  tenacityReceived(data): void {
    this.tenacity = data;
  }
}
