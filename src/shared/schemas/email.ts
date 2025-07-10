import { z } from 'zod';

export const emailSchema = z.email('E-mail inválido');
