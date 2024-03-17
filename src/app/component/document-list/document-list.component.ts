import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'document-list',
    standalone: true,
    imports: [CommonModule, MatIconModule],
    templateUrl: './document-list.component.html',
    styleUrl: './document-list.component.scss'
  })

export class DocumentList {
  document_detail = {
    title: 'Approval Memo',
    currentPage: 1,
    totalPage: 2,
    date: '06/07/2023',
    link: 'Inland Empire Porfolio Quote'
  }
}