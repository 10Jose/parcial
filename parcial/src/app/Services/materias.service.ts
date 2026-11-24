import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MateriasService {
  private http = inject(HttpClient);
  private url = 'http://localhost:3000/api/v1/materias';

  getMaterias(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}