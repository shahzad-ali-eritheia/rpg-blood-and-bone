import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-base-attributes',
  templateUrl: './base-attributes.component.html',
  styleUrls: ['./base-attributes.component.sass']
})

export class BaseAttributesComponent implements OnInit {
  //////////////////// Emitter Outputs ////////////////////
  @Output() strengthEmitter  = new EventEmitter();
  @Output() dexterityEmitter = new EventEmitter();
  @Output() mindEmitter      = new EventEmitter();
  @Output() presenceEmitter  = new EventEmitter();

  //////////////////// LifeCycle Callbacks ////////////////////
  constructor() { }

  ngOnInit(): void {
  }

  //////////////////// Main Methods ////////////////////
  emitStrength(strength): void {
    this.strengthEmitter.emit(strength);
  }

  emitDexterity(dexterity): void {
    this.dexterityEmitter.emit(dexterity);
  }

  emitMind(mind): void {
    this.mindEmitter.emit(mind);
  }

  emitPresence(presence): void {
    this.presenceEmitter.emit(presence);
  }
}
