import { Component } from '@angular/core';
import {
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

@Component({
    selector: 'dialog-box',
    templateUrl: './dialog.component.html',
    styleUrl: './dialog.component.scss',
    standalone: true,
    imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatIconModule, MatDividerModule],
})
export class DialogComponent {
    
}