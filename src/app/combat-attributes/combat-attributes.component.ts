import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-combat-attributes',
  templateUrl: './combat-attributes.component.html',
  styleUrls: ['./combat-attributes.component.sass']
})

export class CombatAttributesComponent implements OnInit, OnChanges {
  //////////////////// Prop Inputs ////////////////////
  @Input() strength: any;
  @Input() dexterity: any;
  @Input() mind: any;
  @Input() presence: any;
  @Input() damage: any;
  @Input() tenacity: any;

  //////////////////// LifeCycle Callbacks ////////////////////
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: any): void {
    this.strength  = parseInt(this.strength,  10);
    this.dexterity = parseInt(this.dexterity, 10);
    this.mind      = parseInt(this.mind,      10);
    this.presence  = parseInt(this.presence,  10);
    this.damage    = parseInt(this.damage,    10);
    this.tenacity  = parseInt(this.tenacity,  10);
  }

  //////////////////// Main Methods ////////////////////
  getVitality(): any {
    if (isNaN(this.strength)) {
      return '';
    } else {
      const Vitality = (this.strength + 3);
      return isNaN(this.damage) ? Vitality : (Vitality - this.damage);
    }
  }

  getEvasion(): any {
    return isNaN(this.dexterity) ? '' : (this.dexterity + 10);
  }

  getArmor(): any {
    return this.getEvasion();
  }

  getAlacrity(): any {
    return (isNaN(this.dexterity) || isNaN(this.mind)) ? '' : (this.dexterity + this.mind);
  }

  getTenacity(): any {
    if (isNaN(this.presence)) {
      return '';
    } else {
      const Tenacity = this.presence + 1;
      return isNaN(this.tenacity) ? Tenacity : (Tenacity + this.tenacity);
    }
  }
}
