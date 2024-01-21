import { z } from "zod";

export const passwordSchema = z
  .object({
    password: z.string().min(8, {
      message: "Usa 8 caracteres como mínimo para la contraseña",
    }),
    confirmPassword: z.string().min(8, {
      message: "Usa 8 caracteres como mínimo para la contraseña",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden. Inténtalo de nuevo.",
    path: ["confirmPassword"],
  });
