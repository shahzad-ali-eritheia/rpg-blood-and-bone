declare var $ : any;

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})

export class SkillsComponent implements OnInit {
  constructor() { }

  //////////////////// LifeCycle Callbacks ////////////////////
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  ngOnChanges(changes: any) {
    this.strength  = parseInt(this.strength);
    this.dexterity = parseInt(this.dexterity);
    this.mind      = parseInt(this.mind);
    this.presence  = parseInt(this.presence);
  }

  //////////////////// Prop Inputs ////////////////////
  @Input() strength:  any;
  @Input() dexterity: any;
  @Input() mind:      any;
  @Input() presence:  any;

  //////////////////// Main Attributes ////////////////////
  baseAttributeSkills = {
    strength:  ['Fighting'],
    dexterity: ['Fighting', 'Thievery', 'Stealth', 'Archery'],
    mind:      ['Learned', 'Survival', 'Perception', 'Apothecary', 'Power'],
    presence:  ['Intimidation', 'Performance', 'Manipulation', 'Insight', 'Power']
  }
  skillRanks = {
    0: 'Untrained',
    1: 'Novice',
    2: 'Apprentice',
    3: 'Adept',
    4: 'Expert',
    5: 'Master'
  }

  //////////////////// Main Methods ////////////////////
  skillAcquired(attr, skill, rank) {
    rank = parseInt(rank);
    return (rank <= this[attr]) ? 'acquired' : 'not-acquired';
  }
}
