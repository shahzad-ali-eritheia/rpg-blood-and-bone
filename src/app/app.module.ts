import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { DetailsComponent } from './details/details.component';
import { BaseAttributesComponent } from './base-attributes/base-attributes.component';
import { CombatAttributesComponent } from './combat-attributes/combat-attributes.component';
import { ActivityComponent } from './activity/activity.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    DetailsComponent,
    BaseAttributesComponent,
    CombatAttributesComponent,
    ActivityComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
