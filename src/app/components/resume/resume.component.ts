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

  onPdfOpen() {
    this.isPdfViewOpen = true;
    document.body.style.overflowY = 'hidden';
  }
}