import z from 'zod';
import { emailSchema } from '~/shared/schemas/email';
import { passwordSchema } from '~/shared/schemas/password';

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type Login = z.infer<typeof loginSchema>;
