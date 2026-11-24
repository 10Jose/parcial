import { pool } from '../config/database';

export const UsuarioModel = {
  buscarPorEmail: async (email: string) => {
    const { rows } = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
    return rows[0];
  }
};