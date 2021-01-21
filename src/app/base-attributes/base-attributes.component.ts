import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-base-attributes',
  templateUrl: './base-attributes.component.html',
  styleUrls: ['./base-attributes.component.sass']
})

export class BaseAttributesComponent implements OnInit {
  constructor() { }

  //////////////////// LifeCycle Callbacks ////////////////////
  ngOnInit(): void {
  }

  //////////////////// Emitter Outputs ////////////////////
  @Output() strengthEmitter  = new EventEmitter();
  @Output() dexterityEmitter = new EventEmitter();
  @Output() mindEmitter      = new EventEmitter();
  @Output() presenceEmitter  = new EventEmitter();

  //////////////////// Main Methods ////////////////////
  emitStrength(strength) {
    this.strengthEmitter.emit(strength);
  }

  emitDexterity(dexterity) {
    this.dexterityEmitter.emit(dexterity);
  }

  emitMind(mind) {
    this.mindEmitter.emit(mind);
  }

  emitPresence(presence) {
    this.presenceEmitter.emit(presence);
  }
}
