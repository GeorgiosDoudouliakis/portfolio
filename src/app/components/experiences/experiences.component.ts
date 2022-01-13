import { Component, OnInit } from '@angular/core';
import { Experience } from '../../models/experience.model';
import { EXPERIENCES } from '../../mock/experiences.mock';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  experiences: Experience[];

  constructor() { }

  ngOnInit(): void {
    this.experiences = EXPERIENCES;
  }
}