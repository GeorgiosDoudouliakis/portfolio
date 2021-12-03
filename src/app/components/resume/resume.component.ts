import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  isPdfViewOpen = false;

  constructor() { }

  ngOnInit(): void {}

  pdfViewHandler() {
    this.isPdfViewOpen = true;
  }
}
