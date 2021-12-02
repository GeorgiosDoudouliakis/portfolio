import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  icons: { [key:string]: string };
  isLinkHovered = false;
  hoveredLinkIcon: HTMLDivElement;
  hoveredImage: HTMLImageElement;
  private elementRef: ElementRef;

  constructor(private elRef: ElementRef) { 
    this.elementRef = elRef;
  }

  ngOnInit(): void {

  }
  
  ngAfterViewInit() {
    this.hoveredLinkIcon = this.elementRef.nativeElement.querySelector('.hovered-link-icon');
    this.hoveredImage = this.hoveredLinkIcon.querySelector('img') as HTMLImageElement;
  }

  onLinkHover(link: 'about' | 'skills' | 'projects' | 'resume') {
    this.isLinkHovered = true;
    this.hoveredLinkIcon.style.display = 'flex';
    this.hoveredLinkIcon.style.justifyContent = 'center';
    this.hoveredLinkIcon.style.alignItems = 'center';
    this.hoveredImage.src = `/assets/images/${link}_icon.png`;
  }

  onLeaveLinkHover() {
    this.isLinkHovered = false;
    this.hoveredLinkIcon.style.display = 'none';
  }
}
