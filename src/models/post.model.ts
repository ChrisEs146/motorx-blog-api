import { z } from "zod";

const postSchema = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title must be text(string)",
    })
    .trim(),
  description: z
    .string({
      required_error: "Description is required",
      invalid_type_error: "Description must be text(string)",
    })
    .trim(),
  image: z
    .string({
      required_error: "Image is required",
      invalid_type_error: "Image path must be string",
    })
    .trim(),
});

export type PostInput = z.infer<typeof postSchema>;
