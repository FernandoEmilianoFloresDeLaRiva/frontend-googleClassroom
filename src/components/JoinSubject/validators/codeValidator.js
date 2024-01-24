import z from "zod";

export const codeSchema = z.object({
  code: z
    .string()
    .min(5, {
      message: "Introduce un codigo valido",
    })
    .max(7, {
      message: "Introduce un codigo valido",
    }),
});
