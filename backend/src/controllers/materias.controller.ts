import { Request, Response } from 'express';
import { MateriaModel } from '../models/material.models';

export const obtenerMaterias = async (req: Request, res: Response) => {
  try {
    const materias = await MateriaModel.obtenerTodas();
    res.json(materias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las materias' });
  }
};

export const obtenerMateriaPorId = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const materia = await MateriaModel.obtenerPorId(id);
    
    if (!materia) {
      return res.status(404).json({ message: 'Materia no encontrada' });
    }
    res.json(materia);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener la materia' });
  }
};