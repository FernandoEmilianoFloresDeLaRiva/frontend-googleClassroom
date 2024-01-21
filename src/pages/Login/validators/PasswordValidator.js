import z from "zod";

export const passwordSchema = z.object({
  password: z.string().min(1, {
    message: "Contraseña incorrecta. Vuelve a intentarlo",
  }),
});
