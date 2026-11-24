export interface Materia {
  id: number;
  codigo: string;
  nombre: string;
  semestre: number;
  creditos: number;
  tipo: string;
  prerrequisito: string | null;
  descripcion: string | null;
}