import { Component } from '@angular/core';
import { LayoutModule } from "@progress/kendo-angular-layout";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LayoutModule, MatGridListModule, MatCardModule, MatBadgeModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
name = 'Manohar';

  activities = [
    {
      title : 'My Approvals',
      link : './approval',
      count: '12',
      icon: 'verified',
      color: '#f26e3c',
      type: 'card'
    },
    {
      title : 'My Tasks',
      link : './task',
      count: '5',
      icon: 'task_alt',
      color: '#f26121',
      type: 'card'
    },
    {
      title : 'Coming Soon',
      link : './',
      count: '0',
      icon: 'front_hand',
      color: '#f26121',
      type: 'tile'
    },
    {
      title : 'Coming Soon',
      link : './',
      count: '0',
      icon: 'front_hand',
      color: '#f26121',
      type: 'tile'
    },
  ] 
}
