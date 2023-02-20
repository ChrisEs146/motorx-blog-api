import { z } from "zod";

const postSchema = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title must be text(string)",
    })
    .trim(),
});

export type PostInput = z.infer<typeof postSchema>;
