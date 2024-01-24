import z from "zod";

export const nameSchema = z.object({
  name: z.string().min(1, {
    message: "Introduce el nombre de tu clase",
  }),
});
