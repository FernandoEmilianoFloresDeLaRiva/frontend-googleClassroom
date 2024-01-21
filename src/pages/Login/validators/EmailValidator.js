import z from "zod";

export const emailSchema = z.object({
  email: z.string().email({
    message: "No se ha podido encontrar tu cuenta de Google",
  }),
});
