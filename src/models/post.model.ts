import { z } from "zod";

const postSchema = z.object({
  title: z.string({ required_error: "Title is required" }).trim(),
  description: z.string({ required_error: "Description is required" }).trim(),
  image: z.string({ required_error: "Image is required" }).trim(),
});

export type PostInput = z.infer<typeof postSchema>;
