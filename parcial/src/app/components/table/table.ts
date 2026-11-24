import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-reusable-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class TableComponent {

  @Input() dataSource: any[] = [];

  get displayedColumns(): string[] {
    if (!this.dataSource || this.dataSource.length === 0) {
      return [];
    }
    return Object.keys(this.dataSource[0]);
  }
}