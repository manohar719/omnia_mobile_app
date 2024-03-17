import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-approval-commission',
  standalone: true,
  imports: [MatCardModule, CdkAccordionModule, MatIconModule, CommonModule],
  templateUrl: './approval-commission.component.html',
  styleUrl: './approval-commission.component.scss'
})
export class ApprovalCommissionComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  show = true
  expandedIndex = 0;
  loan_detail = {
    type: 'Loan Disbursement',
    name: 'Centrum Citrus Farms, LLC',
    system_id: '12345',
    loan_no: '12345678',
    details: [{
      title: 'Loan Details',
      type: 'table',
      content: [{
        label: 'capital source 1',
        value: 'Example text'
      },
      {
        label: 'loan program',
        value: 'Example text'
      },
      {
        label: 'schedule disbursement date',
        value: 'Example text'
      },
      {
        label: 'initial funding or draw',
        value: 'Example text'
      },
      {
        label: 'initial funding or draw',
        value: 'Example text'
      }
      ]
    },
    {
      title: 'Cash Available',
      type: 'table',
      content: [{
        label: 'original loan amount',
        value: '$ 00.000.000'
      },
      {
        label: 'loan amount being disbursed',
        value: '$ 00.000.000'
      },
      {
        label: 'deposit refund from par',
        value: '$ 00.000.000'
      },
      {
        label: 'less payoff funds',
        value: '$ 00.000.000'
      }
      ]
    },
    {
      title: 'Disbursements',
      type: 'table',
      content: [{
        label: 'original loan amount',
        value: 'Example text'
      },
      {
        label: 'loan amount being disbursed',
        value: 'Example text'
      },
      {
        label: 'deposit refund from par',
        value: 'Example text'
      },
      {
        label: 'less payoff funds',
        value: 'Example text'
      }
      ]
    },
    {
      title: 'Documents',
      type: 'table',
      content: [{
        label: 'original loan amount',
        value: 'Example text'
      },
      {
        label: 'loan amount being disbursed',
        value: 'Example text'
      },
      {
        label: 'deposit refund from par',
        value: 'Example text'
      },
      {
        label: 'less payoff funds',
        value: 'Example text'
      }
      ]
    },
    {
      title: 'Documents',
      type: 'table',
      content: [{
        label: 'original loan amount',
        value: 'Example text'
      },
      {
        label: 'loan amount being disbursed',
        value: 'Example text'
      },
      {
        label: 'deposit refund from par',
        value: 'Example text'
      },
      {
        label: 'less payoff funds',
        value: 'Example text'
      }
      ]
    },
    {
      title: 'Documents',
      type: 'table',
      content: [{
        label: 'original loan amount',
        value: 'Example text'
      },
      {
        label: 'loan amount being disbursed',
        value: 'Example text'
      },
      {
        label: 'deposit refund from par',
        value: 'Example text'
      },
      {
        label: 'less payoff funds',
        value: 'Example text'
      }
      ]
    },
    {
      title: 'Documents',
      type: 'table',
      content: [{
        label: 'original loan amount',
        value: 'Example text'
      },
      {
        label: 'loan amount being disbursed',
        value: 'Example text'
      },
      {
        label: 'deposit refund from par',
        value: 'Example text'
      },
      {
        label: 'less payoff funds',
        value: 'Example text'
      },
      {
        label: 'loan amount being disbursed',
        value: 'Example text'
      },
      {
        label: 'deposit refund from par',
        value: 'Example text'
      },
      {
        label: 'less payoff funds',
        value: 'Example text'
      },
      {
        label: 'loan amount being disbursed',
        value: 'Example text'
      },
      {
        label: 'deposit refund from par',
        value: 'Example text'
      },
      {
        label: 'less payoff funds',
        value: 'Example text'
      }
      ]
    },
    // {
    //   title: 'Deal Comments',
    //   type: 'list',
    //   content: [{
    //     user: 'Jayne Doe',
    //     comment: 'I have confirmed the correct structure is updated in Omnia and ready for review',
    //     date_time: '05/22/2023'
    //   },
    //   {
    //     user: 'Crystal Castillo',
    //     comment: 'Verified the details that have send in the email',
    //     date_time: '15/22/2023'
    //   },
    //   ]
    // }
    ]
  }
}
