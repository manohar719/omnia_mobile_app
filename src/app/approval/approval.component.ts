import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-approval',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './approval.component.html',
  styleUrl: './approval.component.scss'
})
export class ApprovalComponent {
  
  approval_list = [
    {
      type: 'Loan Disbursement',
      name: 'Centrum Citrus Farms, LLC',
      system_id: '12345',
      loan_no: '12345678',
      pages: '1/2',
      link: ''
    },
    {
      type: 'Loan Disbursement',
      name: 'Green Tower Apartments',
      system_id: '12345',
      loan_no: '12345678',
      pages: '1/2',
      link: ''
    },
    {
      type: 'Commission',
      name: 'Pelican Self Storage Loan 1 - Sweden Portfolio Number',
      system_id: '12345',
      loan_no: '12345678',
      pages: '1/1',
      link: ''
    },
    {
      type: 'Loan Authorization',
      name: 'ABC Rental portfolio',
      system_id: '12345',
      loan_no: '12345678',
      pages: '2/2',
      link: ''
    },
    {
      type: 'Loan Authorization',
      name: 'Hinkle Business Center',
      system_id: '12345',
      loan_no: '12345678',
      pages: '1/1',
      link: ''
    },
    {
      type: 'Loan Disbursement',
      name: 'Centrum Citrus Farms, LLC',
      system_id: '12345',
      loan_no: '12345678',
      pages: '1/2',
      link: ''
    },
    {
      type: 'Loan Disbursement',
      name: 'Centrum Citrus Farms, LLC',
      system_id: '12345',
      loan_no: '12345678',
      pages: '1/2',
      link: ''
    }
  ]

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
}
