import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  isLinkHovered = false;
  isInMobileDevice: boolean;
  menu: HTMLElement;
  mobileMenuState: 'closed' | 'opened' = 'closed';
  hoveredLinkIcon: HTMLDivElement;
  hoveredImage: HTMLImageElement;
  private elementRef: ElementRef;

  constructor(private elRef: ElementRef) { 
    this.elementRef = elRef;
  }

  ngOnInit(): void {
    this.isInMobileDevice = window.matchMedia('(max-width: 767px)').matches;
  }
  
  ngAfterViewInit() {
    this.menu = this.elementRef.nativeElement.querySelector('nav');
    this.hoveredLinkIcon = this.elementRef.nativeElement.querySelector('.hovered-link-icon');
    this.hoveredImage = this.hoveredLinkIcon.querySelector('img') as HTMLImageElement;
  }

  mobileMenuHandler() {
    if(this.mobileMenuState === 'closed') {
      this.mobileMenuState = 'opened';
      this.menu.style.opacity = '1';
      this.menu.style.zIndex = '2';
    } else if(this.mobileMenuState === 'opened') {
      this.mobileMenuState = 'closed';
      this.menu.style.opacity = '0';
      this.menu.style.zIndex = '-5';
    }
  }

  onLinkHover(link: 'about' | 'skills' | 'projects' | 'resume') {
    this.isLinkHovered = true;
    this.hoveredLinkIcon.style.display = 'flex';
    this.hoveredLinkIcon.style.justifyContent = 'center';
    this.hoveredLinkIcon.style.alignItems = 'center';
    this.hoveredImage.src = `/assets/images/${link}_icon.png`;
    this.hoveredImage.alt = `${link} icon`;
  }

  onLeaveLinkHover() {
    this.isLinkHovered = false;
    this.hoveredLinkIcon.style.display = 'none';
  }
}
