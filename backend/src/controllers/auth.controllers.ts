import { Request, Response } from 'express';
import { UsuarioModel } from '../models/usuario.model';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const usuario = await UsuarioModel.buscarPorEmail(email);

    if (!usuario || usuario.password !== password) {
      return res.status(401).json({ message: 'Correo o contraseña incorrectos' });
    }

    res.json({
      message: 'Login exitoso',
      user: { id: usuario.id, email: usuario.email }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
};