import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MateriasService } from '../../Services/materias.service';
import { TableComponent } from '../../components/table/table';

@Component({
  selector: 'app-materias',
  imports: [CommonModule, TableComponent],
  templateUrl: './materias.html',
  styleUrl: './materias.css',
})
export class Materias {

  materias: any[] = [];
  cargando = true;
  error: string | null = null;

  constructor(
    private materiasService: MateriasService,
    private cdr: ChangeDetectorRef
  ) {
    this.materiasService.getMaterias().subscribe({
      next: (data: any[]) => {
        console.log('data:', data);
        
        setTimeout(() => {
          this.materias = data;
          this.cargando = false;
          this.cdr.detectChanges();
        }, 0);
      },
      error: (err: any) => {
        console.error(err);
        setTimeout(() => {
          this.error = 'No se pudieron cargar las materias';
          this.cargando = false;
          this.cdr.detectChanges();
        }, 0);
      }
    });
  }
}