import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector:    'app-character',
  templateUrl: './character.component.html',
  styleUrls:   ['./character.component.sass']
})

export class CharacterComponent implements OnInit {
  //////////////////// Emitter Outputs ////////////////////
  @Output() characterEmitter = new EventEmitter();

  //////////////////// LifeCycle Callbacks ////////////////////
  constructor() { }

  ngOnInit(): void {
  }

  //////////////////// Main Methods ////////////////////
  emitCharacterName(name): void {
    this.characterEmitter.emit(name);
  }
}
