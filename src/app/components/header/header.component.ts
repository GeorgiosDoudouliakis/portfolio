import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

type Link ='about' | 'education' | 'skills' | 'projects' | 'resume';

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
      this.openMobileMenu();
    } else if(this.mobileMenuState === 'opened') {
      this.closeMobileMenu();
    }
  }

  scrollTo(link: Link) {
    if(this.isInMobileDevice) {
      this.closeMobileMenu();
    }
    document.querySelector(`.${link}`)?.scrollIntoView();
  }

  onLinkHover(link: Link) {
    this.isLinkHovered = true;
    this.hoveredLinkIcon.style.display = 'flex';
    this.hoveredLinkIcon.style.justifyContent = 'center';
    this.hoveredLinkIcon.style.alignItems = 'center';
    this.hoveredImage.src = `/assets/images/icons/${link}_icon.png`;
    this.hoveredImage.alt = `${link} icon`;
  }

  onLeaveLinkHover() {
    this.isLinkHovered = false;
    this.hoveredLinkIcon.style.display = 'none';
  }

  private openMobileMenu() {
    this.mobileMenuState = 'opened';
    this.menu.style.opacity = '1';
    this.menu.style.zIndex = '2';
  }

  private closeMobileMenu() {
    this.mobileMenuState = 'closed';
    this.menu.style.opacity = '0';
    this.menu.style.zIndex = '-5';
  }
}
