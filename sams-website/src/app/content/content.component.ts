import { Component,  inject, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { NgIf } from '@angular/common';
import { MatDrawer, MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';


@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ 
    RouterOutlet,
    NavBarComponent,
    MatSidenavModule,
    NgIf],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  private breakpointObserver = inject(BreakpointObserver);

  isMobile = signal(false);
  drawerMode = signal<'side' | 'over'>('side');
  drawerOpened = signal(true);

  isOpen = true;

  constructor() {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      if (result.matches) {
        this.isMobile.set(true);
        this.drawerMode.set('over');
        this.drawerOpened.set(false);
      } else {
        this.isMobile.set(false);
        this.drawerMode.set('side');
        this.drawerOpened.set(true);
      }
    });
  }
}
