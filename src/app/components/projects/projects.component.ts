import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { PROJECTS } from 'src/app/mock/projects.mock';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor() { }

  ngOnInit(): void {
    this.projects = PROJECTS;
  }
}
