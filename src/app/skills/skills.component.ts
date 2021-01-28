declare var $: any;

import { Component, OnInit, Input, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})

export class SkillsComponent implements OnInit, OnChanges, AfterViewInit {
  //////////////////// Main Attributes ////////////////////
  baseAttributeSkills = {
    strength:  ['Fighting'],
    dexterity: ['Fighting', 'Thievery', 'Stealth', 'Archery'],
    mind:      ['Learned', 'Survival', 'Perception', 'Apothecary', 'Power'],
    presence:  ['Intimidation', 'Performance', 'Manipulation', 'Insight', 'Power']
  };
  skillRanks = {
    0: 'Untrained',
    1: 'Novice',
    2: 'Apprentice',
    3: 'Adept',
    4: 'Expert',
    5: 'Master'
  };

  //////////////////// Prop Inputs ////////////////////
  @Input() strength: any;
  @Input() dexterity: any;
  @Input() mind: any;
  @Input() presence: any;

  //////////////////// LifeCycle Callbacks ////////////////////
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    $('[data-toggle="tooltip"]').tooltip();
  }

  ngOnChanges(changes: any): void {
    this.strength  = parseInt(this.strength,  10);
    this.dexterity = parseInt(this.dexterity, 10);
    this.mind      = parseInt(this.mind,      10);
    this.presence  = parseInt(this.presence,  10);
  }

  //////////////////// Main Methods ////////////////////
  skillAcquired(attr, skill, rank): any {
    rank = parseInt(rank, 10);
    return (rank <= this[attr]) ? 'acquired' : 'not-acquired';
  }
}
