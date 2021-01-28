import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.sass']
})

export class ActivityComponent implements OnInit {
  //////////////////// Emitter Outputs ////////////////////
  @Output() damageEmitter   = new EventEmitter();
  @Output() tenacityEmitter = new EventEmitter();

  //////////////////// LifeCycle Callbacks ////////////////////
  constructor() { }

  ngOnInit(): void {
  }

  //////////////////// Main Methods ////////////////////
  emitDamage(damage): void {
    this.damageEmitter.emit(damage);
  }

  emitTenacity(tenacity): void {
    this.tenacityEmitter.emit(tenacity);
  }
}
