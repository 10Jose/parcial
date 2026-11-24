import { pool } from '../config/database';
import { Materia } from './materia.model';

export const MateriaModel = {
  obtenerTodas: async (): Promise<Materia[]> => {
    const { rows } = await pool.query('SELECT * FROM materias_ing_sistemas');
    return rows;
  },

  obtenerPorId: async (id: number): Promise<Materia | undefined> => {
    const { rows } = await pool.query('SELECT * FROM materias_ing_sistemas WHERE id = $1', [id]);
    return rows[0];
  }
};