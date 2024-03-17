import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'change-log',
    standalone: true,
    imports: [CommonModule, MatIconModule],
    templateUrl: './change-log.component.html',
    styleUrl: './change-log.component.scss'
  })

export class ChangeLog {
  change_log = {
    name: 'Svetlana Kuznetsova',
    action: 'Submit for approval',
    date: '06/07/2023'
  }
}