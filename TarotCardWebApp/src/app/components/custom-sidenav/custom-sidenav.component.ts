import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { RouterModule } from '@angular/router';

export type MenuItem = {
  icon: string;
  label: string; 
  route: string;
}

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [
  CommonModule, MatListModule, MatIconModule, RouterModule
  ],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss'
})
export class CustomSidenavComponent {

  sideNavCollapsed = signal(false); 
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val); 
  }

  menuItems = signal<MenuItem[]>([
    {
      icon: 'home',
      label: 'Home',
      route: 'home',
    },
    {
      icon: 'public',
      label: 'Single Card Reading',
      route: 'single-card-reading',
    },
    {
      icon: 'access_time',
      label: 'Past, Present, Future',
      route: 'past-present-future',
    },
    {
      icon: 'title',
      label: 'Cross Reading',
      route: 'cross-reading',
    },
    {
      icon: 'person',
      label: 'Card Information',
      route: 'card-information',
    },
  ]);

}
