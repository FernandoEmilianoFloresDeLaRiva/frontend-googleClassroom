import z from "zod";

export const taskSchema = z.object({
  workname: z.string().min(1, {
    message: "Introduce el nombre de tu tarea",
  }),
  description: z.string().optional(),
  date: z.coerce.date().nullable().default(null)
});
