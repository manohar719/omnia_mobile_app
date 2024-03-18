import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'approval-title',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './approval-title.component.html',
    styleUrl: './approval-title.component.scss'
  })

export class ApprovalTitle {
  netCommissionPayable = '$ 000,00,000.00'; 
}