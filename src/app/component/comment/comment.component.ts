import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'comment-note',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './comment.component.html',
    styleUrl: './comment.component.scss'
  })

export class Comment {
  comment = {
    name: 'Jayne Doe',
    date: '06/07/2023',
    note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  }
}