import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.sass']
})

export class ActivityComponent implements OnInit {
  constructor() { }

  //////////////////// LifeCycle Callbacks ////////////////////
  ngOnInit(): void {
  }

  //////////////////// Emitter Outputs ////////////////////
  @Output() damageEmitter   = new EventEmitter();
  @Output() tenacityEmitter = new EventEmitter();

  //////////////////// Main Methods ////////////////////
  emitDamage(damage) {
    this.damageEmitter.emit(damage);
  }

  emitTenacity(tenacity) {
    this.tenacityEmitter.emit(tenacity);
  }
}
