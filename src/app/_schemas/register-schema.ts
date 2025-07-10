import z from 'zod';
import { emailSchema } from '~/shared/schemas/email';
import { passwordSchema } from '~/shared/schemas/password';

export const registerUserSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  password: passwordSchema,
  email: emailSchema,
  confirmPassword: passwordSchema,
});

export type RegisterUser = z.infer<typeof registerUserSchema>;
