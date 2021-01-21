import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-combat-attributes',
  templateUrl: './combat-attributes.component.html',
  styleUrls: ['./combat-attributes.component.sass']
})

export class CombatAttributesComponent implements OnInit {
  constructor() { }

  //////////////////// LifeCycle Callbacks ////////////////////
  ngOnInit(): void {
  }

  ngOnChanges(changes: any) {
    this.strength  = parseInt(this.strength);
    this.dexterity = parseInt(this.dexterity);
    this.mind      = parseInt(this.mind);
    this.presence  = parseInt(this.presence);
    this.damage    = parseInt(this.damage);
    this.tenacity  = parseInt(this.tenacity);
  }

  //////////////////// Prop Inputs ////////////////////
  @Input() strength:  any;
  @Input() dexterity: any;
  @Input() mind:      any;
  @Input() presence:  any;
  @Input() damage:    any;
  @Input() tenacity:  any;

  //////////////////// Main Methods ////////////////////
  getVitality() {
    if (isNaN(this.strength)) {
      return '';
    } else {
      var _vitality = (this.strength + 3);
      return isNaN(this.damage) ? _vitality : (_vitality - this.damage);
    }
  }

  getEvasion() {
    return isNaN(this.dexterity) ? '' : (this.dexterity + 10);
  }

  getArmor() {
    return this.getEvasion();
  }

  getAlacrity() {
    return (isNaN(this.dexterity) || isNaN(this.mind)) ? '' : (this.dexterity + this.mind);
  }

  getTenacity() {
    if (isNaN(this.presence)) {
      return '';
    } else {
      var _tenacity = this.presence + 1;
      return isNaN(this.tenacity) ? _tenacity : (_tenacity + this.tenacity);
    }
  }
}
