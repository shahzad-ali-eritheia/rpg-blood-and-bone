import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector:    'app-character',
  templateUrl: './character.component.html',
  styleUrls:   ['./character.component.sass']
})

export class CharacterComponent implements OnInit {
  constructor() { }

  //////////////////// LifeCycle Callbacks ////////////////////
  ngOnInit(): void {
  }

  //////////////////// Emitter Outputs ////////////////////
  @Output() characterEmitter = new EventEmitter();

  //////////////////// Main Methods ////////////////////
  emitCharacterName(name) {
    this.characterEmitter.emit(name)
  }
}
