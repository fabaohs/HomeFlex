import z from 'zod';

export const passwordSchema = z
  .string({ error: 'A senha deve ter no mínimo 6 caracteres' })
  .min(6, { error: 'A senha deve ter no mínimo 6 caracteres' });
