import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})

export class DetailsComponent implements OnInit {
  //////////////////// Prop Inputs ////////////////////
  @Input() characterName: any;
  @Input() strength: any;
  @Input() dexterity: any;
  @Input() mind: any;
  @Input() presence: any;

  //////////////////// LifeCycle Callbacks ////////////////////
  constructor() { }

  ngOnInit(): void {
  }
}
