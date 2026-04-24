import { z } from "zod";

export const mealSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z.coerce.number().positive("Price must be greater than 0"),
  image: z.string().url("Must be a valid image URL"),
  categoryId: z.string().min(1, "Please select a category"),
});

export type IMealFormPayload = z.infer<typeof mealSchema>;
export type IMealFormInput = z.input<typeof mealSchema>;
