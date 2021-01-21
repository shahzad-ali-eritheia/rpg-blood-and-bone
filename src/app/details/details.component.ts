import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})

export class DetailsComponent implements OnInit {
  constructor() { }

  //////////////////// LifeCycle Callbacks ////////////////////
  ngOnInit(): void {
  }

  //////////////////// Prop Inputs ////////////////////
  @Input() characterName: any;
  @Input() strength:      any;
  @Input() dexterity:     any;
  @Input() mind:          any;
  @Input() presence:      any;
}
