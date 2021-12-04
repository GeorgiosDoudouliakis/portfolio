import { Component, OnInit } from '@angular/core';
import { TechnologiesSkills } from 'src/app/models/technologies-skills.model';
import { TECHNOLOGIES_SKILLS } from 'src/app/mock/technologies-skills.mock';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  technologiesSkills: TechnologiesSkills[];

  constructor() { }

  ngOnInit(): void {
    this.technologiesSkills = TECHNOLOGIES_SKILLS;
  }

}
