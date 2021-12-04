import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pdf-view',
  templateUrl: './pdf-view.component.html',
  styleUrls: ['./pdf-view.component.scss']
})
export class PdfViewComponent implements OnInit {
  @Output() pdfViewHandler = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {}

}
