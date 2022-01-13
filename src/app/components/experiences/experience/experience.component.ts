import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Experience } from '../../../models/experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent implements OnInit {
  @Input() experience = {} as Experience;
  @Input() numOfExperiences: number;

  constructor() { }

  ngOnInit(): void {}
}